'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface ContentLoaderProps {
  text?: string;
}

const ContentLoader: React.FC<ContentLoaderProps> = ({ 
  text = 'Loading content...' 
}) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Animated Book Icon */}
        <div className="relative">
          <div className={`w-24 h-32 rounded-lg shadow-2xl transform transition-all duration-500 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-accent-gold/20 to-yellow-400/10 border-2 border-accent-gold/30' 
              : 'bg-gradient-to-br from-accent-gold/30 to-yellow-400/20 border-2 border-accent-gold/40'
          }`}>
            {/* Book Pages Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Page turning effect */}
                <div className={`absolute top-0 left-0 w-1/2 h-full rounded-l-lg ${
                  theme === 'dark' ? 'bg-accent-gold/40' : 'bg-accent-gold/50'
                } animate-pulse`}></div>
                {/* Book lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-2 px-3">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className={`h-0.5 rounded ${
                        theme === 'dark' ? 'bg-accent-gold/30' : 'bg-accent-gold/40'
                      } animate-pulse`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-lg ${
            theme === 'dark' ? 'bg-accent-gold/20' : 'bg-accent-gold/30'
          } blur-xl animate-pulse`}></div>
        </div>

        {/* Loading Text with Animation */}
        <div className="text-center space-y-3">
          <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            {text}
          </h3>
          {/* Animated Dots */}
          <div className="flex items-center justify-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-accent-gold' : 'bg-accent-gold'
            } animate-bounce`} style={{ animationDelay: '0s' }}></div>
            <div className={`w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-accent-gold' : 'bg-accent-gold'
            } animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
            <div className={`w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-accent-gold' : 'bg-accent-gold'
            } animate-bounce`} style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 max-w-md">
          <div className={`h-1.5 rounded-full overflow-hidden ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
          }`}>
            <div className={`h-full bg-gradient-to-r from-accent-gold to-yellow-400 rounded-full w-full animate-pulse`}></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContentLoader;

