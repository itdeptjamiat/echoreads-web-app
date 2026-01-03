'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageUrl
}) => {
  const { theme } = useTheme();

  return (
    <section className={`py-8 sm:py-12 lg:py-16 xl:py-24 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-primary-background' 
        : 'bg-light-primary-background'
    }`}>
      <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className={`text-accent-gold font-semibold text-xs sm:text-sm uppercase tracking-wide transition-colors duration-300`}>
                {subtitle}
              </p>
              <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                {title}
              </h1>
              <p className={`text-sm sm:text-base lg:text-lg xl:text-xl transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={primaryButtonLink}
                className={`inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-accent-gold text-button-text hover:bg-yellow-400 shadow-lg hover:shadow-xl'
                    : 'bg-accent-gold text-button-text hover:bg-yellow-400 shadow-lg hover:shadow-xl'
                }`}
              >
                {primaryButtonText}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  href={secondaryButtonLink}
                  className={`inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-button-text'
                      : 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-button-text'
                  }`}
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8">
              {[
                { icon: '📱', text: 'Read Anywhere' },
                { icon: '⚡', text: 'Lightning Fast' },
                { icon: '🎨', text: 'Beautiful Design' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl">{feature.icon}</span>
                  <span className={`font-medium text-xs sm:text-sm lg:text-base transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* App Preview - First 3 Images */}
          <div className="relative">
            <div className="flex gap-1.5 sm:gap-2 lg:gap-3 items-center justify-center max-w-2xl mx-auto">
              {[
                { src: '/app images/screen1.png', alt: 'EchoReads App Screenshot 1' },
                { src: '/app images/screen2.png', alt: 'EchoReads App Screenshot 2' },
                { src: '/app images/screen3.png', alt: 'EchoReads App Screenshot 3' }
              ].map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl transition-all duration-700 hover:shadow-2xl hover:scale-105 flex-1 max-w-[80px] sm:max-w-[120px] lg:max-w-[150px] xl:max-w-[180px] ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                  style={{
                    animation: `fadeInUp 1s ease-out ${index * 0.2}s both`
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

