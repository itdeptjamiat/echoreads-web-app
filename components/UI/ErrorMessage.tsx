'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
        theme === 'dark' 
          ? 'bg-red-900 bg-opacity-20' 
          : 'bg-red-100'
      }`}>
        <span className="text-2xl">⚠️</span>
      </div>
      <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
        theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
      }`}>
        Oops! Something went wrong
      </h3>
      <p className={`text-sm mb-4 transition-colors duration-300 ${
        theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
      }`}>
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            theme === 'dark'
              ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
              : 'bg-accent-gold text-button-text hover:bg-yellow-400'
          }`}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;

