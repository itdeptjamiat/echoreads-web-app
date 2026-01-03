'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

interface Magazine {
  id: string;
  title: string;
  description: string;
  imagePath: string;
}

interface MagazineScrollProps {
  magazines: Magazine[];
}

const MagazineScroll: React.FC<MagazineScrollProps> = ({ magazines }) => {
  const { theme } = useTheme();
  
  // Duplicate magazines for seamless infinite scroll
  const duplicatedMagazines = [...magazines, ...magazines, ...magazines];

  return (
    <div className="relative overflow-hidden py-3 sm:py-6">
      {/* Gradient overlays - More subtle */}
      <div className={`absolute left-0 top-0 bottom-0 w-12 sm:w-16 lg:w-24 z-10 pointer-events-none ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-section-background via-section-background/80 to-transparent' 
          : 'bg-gradient-to-r from-light-section-background via-light-section-background/80 to-transparent'
      }`} />
      <div className={`absolute right-0 top-0 bottom-0 w-12 sm:w-16 lg:w-24 z-10 pointer-events-none ${
        theme === 'dark' 
          ? 'bg-gradient-to-l from-section-background via-section-background/80 to-transparent' 
          : 'bg-gradient-to-l from-light-section-background via-light-section-background/80 to-transparent'
      }`} />
      
      {/* Scrolling container - Smaller, more elegant */}
      <div className="flex animate-scroll gap-2 sm:gap-3">
        {duplicatedMagazines.map((magazine, index) => (
          <div
            key={`${magazine.id}-${index}`}
            className="flex-shrink-0 w-16 h-24 sm:w-20 sm:h-32 md:w-24 md:h-36 rounded-lg sm:rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:z-20 group"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={magazine.imagePath}
                alt={magazine.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MagazineScroll;

