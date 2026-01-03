'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * Configuration for particle effect
 * Tuned to match antigravity.google's minimal, elegant style
 */
const PARTICLE_CONFIG = {
  maxParticles: 120, // Increased count for better coverage
  mobileParticles: 150, // More particles for mobile to cover screen better
  particleSize: 3.5, // Larger dots for better visibility
  maxSize: 2.5, // More size variation for better visibility
  inertia: 0.15, // Increased attraction force - particles move more noticeably towards cursor
  fadeSpeed: 0.01, // Slow, soft fade out
  spawnDistance: 8, // Close to cursor
  maxDistance: 200, // Particles can drift much further to cover screen
  smoothness: 0.2, // Smooth mouse interpolation
  spawnChance: 0.9, // Very high spawn rate - particles appear frequently
  attractionStrength: 0.02, // Strength of attraction to cursor (higher = stronger pull)
} as const;

/**
 * Brand color: Warm yellow/amber (#FACC15)
 * RGB: (250, 204, 21)
 */
const BRAND_YELLOW = {
  r: 250,
  g: 204,
  b: 21,
} as const;

/**
 * Premium mouse cursor particle effect
 * Matches antigravity.google's minimal, atmospheric style
 * - Very small circular dots only
 * - Low particle count
 * - Smooth inertia-based motion
 * - Soft fade out
 * - No glow, blur, or effects
 */
const CursorParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  // Mouse position with smooth interpolation
  const mousePos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  
  // Particle system
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    rotation: number; // Rotation angle towards cursor
  }>>([]);

  /**
   * Check if device is mobile/touch and screen size (SSR-safe)
   * Particles only show on large screens (desktop) with mouse interaction
   */
  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
      );
    };
    const checkLargeScreen = () => {
      // Only show on screens 1024px and wider (large screens/desktop)
      return window.innerWidth >= 1024;
    };
    
    setIsTouchDevice(checkMobile());
    setIsLargeScreen(checkLargeScreen());
    
    // Listen for screen size changes
    const handleResize = () => {
      setIsLargeScreen(checkLargeScreen());
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /**
   * Get theme-based particle color matching signup button (accent-gold)
   * Uses the same brand yellow color as the signup button background
   * Reduced opacity for subtle background effect
   */
  const getParticleColor = useCallback(() => {
    const { r, g, b } = BRAND_YELLOW;
    // Same color as signup button (accent-gold: #FACC15) with increased opacity for better visibility
    // Using full brand yellow color to match signup button exactly
    if (theme === 'dark') {
      // Dark mode: much higher opacity for better visibility
      return `rgba(${r}, ${g}, ${b}, ${isTouchDevice ? 0.7 : 0.5})`;
    } else {
      // Light mode: higher opacity for better visibility
      return `rgba(${r}, ${g}, ${b}, ${isTouchDevice ? 0.6 : 0.4})`;
    }
  }, [theme, isTouchDevice]);

  /**
   * Create a new particle at cursor position
   * Particles spawn very close to cursor with minimal spread
   */
  const createParticle = useCallback((x: number, y: number) => {
    // Very small random offset - particles stay close
    const offsetX = (Math.random() - 0.5) * 3;
    const offsetY = (Math.random() - 0.5) * 3;
    
    // Minimal initial velocity - particles drift gently
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.8 + 0.3; // Very slow, elegant drift
    
    particles.current.push({
      x: x + offsetX,
      y: y + offsetY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1.0,
      maxLife: 1.0,
      size: PARTICLE_CONFIG.particleSize + Math.random() * PARTICLE_CONFIG.maxSize,
      rotation: angle, // Initial rotation matches movement direction
    });

    // Maintain particle limit
    if (particles.current.length > PARTICLE_CONFIG.maxParticles) {
      particles.current.shift();
    }
  }, []);

  /**
   * Create initial particles for desktop (distributed across screen)
   */
  const createInitialDesktopParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create initial particles distributed across the screen - increased count
    const initialCount = 80; // More particles for better background coverage
    
    for (let i = 0; i < initialCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        life: 1.0,
        maxLife: 1.0,
        size: PARTICLE_CONFIG.particleSize + Math.random() * PARTICLE_CONFIG.maxSize,
        rotation: Math.random() * Math.PI * 2, // Random initial rotation
      });
    }
  }, []);

  /**
   * Update particle positions for desktop (mouse-following)
   * Implements smooth inertia-based motion with strong attraction to cursor
   * Particles rotate towards cursor position
   */
  const updateParticlesDesktop = useCallback(() => {
    particles.current = particles.current
      .map((particle) => {
        // Calculate distance and direction to cursor
        const dx = mousePos.current.x - particle.x;
        const dy = mousePos.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Update rotation to point towards cursor
        if (distance > 0) {
          // Calculate angle towards cursor
          const targetRotation = Math.atan2(dy, dx);
          // Smoothly rotate towards cursor
          let rotationDiff = targetRotation - particle.rotation;
          // Normalize angle difference to [-PI, PI]
          while (rotationDiff > Math.PI) rotationDiff -= 2 * Math.PI;
          while (rotationDiff < -Math.PI) rotationDiff += 2 * Math.PI;
          // Smooth rotation interpolation
          particle.rotation += rotationDiff * 0.1;
        }
        
        // Apply attraction force to ALL particles - they slowly move towards cursor
        if (distance > 0) {
          // Stronger attraction - particles are pulled towards cursor
          // The closer they are, the stronger the pull (inverse relationship)
          const attractionForce = PARTICLE_CONFIG.attractionStrength * (1 / (distance * 0.01 + 1));
          particle.vx += (dx / distance) * attractionForce;
          particle.vy += (dy / distance) * attractionForce;
        }
        
        // Update position with velocity
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Smooth friction - gradual deceleration (but not too strong to allow movement)
        particle.vx *= 0.92;
        particle.vy *= 0.92;
        
        // Soft fade out
        particle.life -= PARTICLE_CONFIG.fadeSpeed;
        
        // Remove if too far or fully faded
        if (distance > PARTICLE_CONFIG.maxDistance || particle.life <= 0) {
          return null;
        }
        
        return particle;
      })
      .filter((p): p is NonNullable<typeof p> => p !== null);
  }, []);

  /**
   * Update particle positions for mobile (attraction to touch position)
   * Particles move towards touch position, with gentle circular motion when not touched
   * Particles rotate towards touch/cursor position
   */
  const updateParticlesMobile = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const time = Date.now() * 0.001; // Time in seconds
    
    particles.current = particles.current
      .map((particle, index) => {
        // Calculate distance and direction to cursor/touch position
        const dx = mousePos.current.x - particle.x;
        const dy = mousePos.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Update rotation to point towards cursor/touch
        if (distance > 0) {
          // Calculate angle towards cursor
          const targetRotation = Math.atan2(dy, dx);
          // Smoothly rotate towards cursor
          let rotationDiff = targetRotation - particle.rotation;
          // Normalize angle difference to [-PI, PI]
          while (rotationDiff > Math.PI) rotationDiff -= 2 * Math.PI;
          while (rotationDiff < -Math.PI) rotationDiff += 2 * Math.PI;
          // Smooth rotation interpolation
          particle.rotation += rotationDiff * 0.1;
        }
        
        // Apply attraction force - particles move towards touch/cursor
        if (distance > 0) {
          // Stronger attraction on mobile for better visibility
          const attractionForce = PARTICLE_CONFIG.attractionStrength * 1.5 * (1 / (distance * 0.01 + 1));
          particle.vx += (dx / distance) * attractionForce;
          particle.vy += (dy / distance) * attractionForce;
        }
        
        // Add gentle circular motion when far from cursor (background animation)
        if (distance > 100) {
          const speed = 0.1 + (index % 4) * 0.05;
          const radius = 20 + (index % 5) * 5;
          const phase = (index * 0.3) + time * speed;
          particle.vx += Math.cos(phase) * 0.1;
          particle.vy += Math.sin(phase) * 0.1;
        }
        
        // Update position with velocity
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Smooth friction
        particle.vx *= 0.92;
        particle.vy *= 0.92;
        
        // Keep particles on screen
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Particles don't fade out on mobile - they persist
        particle.life = 1.0;
        
        return particle;
      })
      .filter((p): p is NonNullable<typeof p> => p !== null);
  }, []);

  /**
   * Create particles for mobile (automatic background animation)
   * Distributes particles across the whole screen
   */
  const createMobileParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create particles distributed across the entire screen
    const particleCount = PARTICLE_CONFIG.mobileParticles;
    particles.current = [];
    
    // Calculate grid spacing to cover screen
    const cols = Math.ceil(Math.sqrt(particleCount * (canvas.width / canvas.height)));
    const rows = Math.ceil(particleCount / cols);
    const spacingX = canvas.width / (cols + 1);
    const spacingY = canvas.height / (rows + 1);
    
    // Larger particles on mobile for better visibility
    const mobileSizeMultiplier = 1.3;
    
    for (let i = 0; i < particleCount; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      // Distribute with some randomness for natural look
      const x = spacingX * (col + 1) + (Math.random() - 0.5) * spacingX * 0.5;
      const y = spacingY * (row + 1) + (Math.random() - 0.5) * spacingY * 0.5;
      
      particles.current.push({
        x: Math.max(0, Math.min(canvas.width, x)),
        y: Math.max(0, Math.min(canvas.height, y)),
        vx: 0,
        vy: 0,
        life: 1.0,
        maxLife: 1.0,
        size: (PARTICLE_CONFIG.particleSize + Math.random() * PARTICLE_CONFIG.maxSize) * mobileSizeMultiplier,
        rotation: Math.random() * Math.PI * 2, // Random initial rotation
      });
    }
  }, []);

  /**
   * Main animation loop
   * Runs at high FPS for fluid motion
   */
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true, // Optimize for performance
    });
    if (!ctx) return;

    // Smooth mouse position interpolation
    // Creates fluid, non-jarring cursor tracking
    mousePos.current.x += (targetPos.current.x - mousePos.current.x) * PARTICLE_CONFIG.smoothness;
    mousePos.current.y += (targetPos.current.y - mousePos.current.y) * PARTICLE_CONFIG.smoothness;

    // Clear canvas for fresh frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Only update particles on desktop (large screens with mouse)
    // Mobile is handled by early return in render
    if (!isTouchDevice && isLargeScreen) {
      updateParticlesDesktop();
    }

    // Draw particles as rotated lines pointing towards cursor
    const color = getParticleColor();
    particles.current.forEach((particle) => {
      // Use full life for better visibility - particles don't fade as much
      const baseAlpha = Math.pow(particle.life, 1.2); // Less aggressive fade curve
      const alpha = baseAlpha; // Use base alpha
      
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 2; // Thicker lines for better visibility
      ctx.lineCap = 'round';
      
      // Move to particle position and rotate
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      const size = particle.size;
      
      // Draw a line pointing in the direction of rotation (towards cursor)
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(size * 2.5, 0); // Longer line for better visibility
      ctx.stroke();
      
      // Draw a circle at the base for better visibility - larger
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.7, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });

    // Continue animation loop
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [updateParticlesDesktop, getParticleColor, isTouchDevice, isLargeScreen]);

  /**
   * Handle mouse movement
   * Particles spawn regularly but not on every move
   */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    targetPos.current.x = e.clientX;
    targetPos.current.y = e.clientY;
    
    // Initialize mouse position on first move
    if (mousePos.current.x === 0 && mousePos.current.y === 0) {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    }
    
    // Moderate spawn rate - particles appear regularly
    if (Math.random() > (1 - PARTICLE_CONFIG.spawnChance)) {
      createParticle(e.clientX, e.clientY);
    }
  }, [createParticle]);

  /**
   * Handle mouse leave
   * Accelerate fade out when cursor leaves viewport
   */
  const handleMouseLeave = useCallback(() => {
    particles.current.forEach((particle) => {
      particle.life *= 0.7; // Faster fade when cursor leaves
    });
  }, []);

  /**
   * Setup canvas and event listeners
   * Different behavior for desktop (mouse-following) and mobile (auto-loop)
   */
  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to match viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
    };

    resizeCanvas();

    // Only initialize particles on large screens (desktop) with mouse interaction
    // Skip mobile and small screens entirely - return early if conditions not met
    if (isTouchDevice || !isLargeScreen) {
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }

    // Desktop large screen: Mouse-following particles
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Mouse event handlers
    const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e);
    const mouseLeaveHandler = () => handleMouseLeave();
    
    window.addEventListener('mousemove', mouseMoveHandler, { passive: true });
    window.addEventListener('mouseleave', mouseLeaveHandler, { passive: true });

    // Initialize mouse position to center of screen
    targetPos.current.x = window.innerWidth / 2;
    targetPos.current.y = window.innerHeight / 2;
    mousePos.current.x = targetPos.current.x;
    mousePos.current.y = targetPos.current.y;

    // Create initial particles for desktop
    createInitialDesktopParticles();

    // Start animation loop for desktop
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseleave', mouseLeaveHandler);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
      }, [isMounted, isTouchDevice, isLargeScreen, handleMouseMove, handleMouseLeave, animate, createInitialDesktopParticles]);

  // Don't render before mount, on mobile devices, or on small screens
  // Only show particles on large screens (desktop) with mouse interaction
  if (!isMounted || isTouchDevice || !isLargeScreen) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{
        // On desktop, use subtle blend mode for dark mode, multiply for better contrast in light mode
        mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
        opacity: 1,
      }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
};

export default CursorParticles;
