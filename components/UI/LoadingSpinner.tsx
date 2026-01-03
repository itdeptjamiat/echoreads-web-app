'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const { theme } = useTheme();

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-t-transparent ${
        theme === 'dark' 
          ? 'border-accent-gold' 
          : 'border-accent-gold'
      }`}></div>
      <p className={`mt-4 text-sm font-medium transition-colors duration-300 ${
        theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
      }`}>
        {text}
      </p>
    </div>
  );
};

export default LoadingSpinner;

