'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { Magazine } from '@/lib/api';

interface DigestCardProps {
  digest: Magazine;
}

const DigestCard: React.FC<DigestCardProps> = ({ digest }) => {
  const { theme } = useTheme();

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'digest': return '📋';
      default: return '📖';
    }
  };

  return (
    <Link 
      href={`/content/${digest._id}`}
      className={`block transition-all duration-200 hover:scale-[1.02] ${
        theme === 'dark' 
          ? 'hover:bg-gray-800' 
          : 'hover:bg-gray-50'
      }`}
    >
      <div className={`h-full p-4 rounded-xl border-2 transition-colors duration-300 flex flex-col ${
        theme === 'dark' 
          ? 'bg-section-background border-gray-600' 
          : 'bg-light-section-background border-gray-300'
      }`}>
        {/* Header with Icon and Type */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
              theme === 'dark' ? 'bg-accent-gold' : 'bg-accent-gold'
            }`}>
              {getContentTypeIcon(digest.magazineType)}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`text-base font-bold transition-colors duration-300 truncate ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                {digest.name}
              </h3>
              <p className={`text-xs transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Digest • {digest.category}
              </p>
            </div>
          </div>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
            digest.type === 'pro' 
              ? 'bg-accent-gold text-button-text' 
              : 'bg-green-500 text-white'
          }`}>
            {digest.type === 'pro' ? 'PRO' : 'FREE'}
          </span>
        </div>

        {/* Image and Description */}
        <div className="flex space-x-3 mb-3 flex-1">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={digest.image || 'https://via.placeholder.com/64x64/1f2937/ffffff?text=Digest'}
              alt={digest.name}
              fill
              className="object-cover rounded-lg"
              sizes="64px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-xs line-clamp-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              {digest.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs mb-3">
          <div className="flex items-center space-x-3">
            <span className={`flex items-center space-x-1 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <span>👁️</span>
              <span>{digest.views}</span>
            </span>
            <span className={`flex items-center space-x-1 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <span>❤️</span>
              <span>{digest.likes}</span>
            </span>
            <span className={`flex items-center space-x-1 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <span>📅</span>
              <span>{new Date(digest.createdAt).toLocaleDateString()}</span>
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <button className={`w-full px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            theme === 'dark'
              ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
              : 'bg-accent-gold text-button-text hover:bg-yellow-400'
          }`}>
            Read Digest
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DigestCard;

