'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { Magazine } from '@/lib/api';

interface ContentCardProps {
  magazine: Magazine;
}

const ContentCard: React.FC<ContentCardProps> = ({ magazine }) => {
  const { theme } = useTheme();
  
  const {
    _id = '',
    name: title = 'Untitled',
    description = 'No description available',
    image = '',
    category = 'Uncategorized',
    magazineType: type = 'magazine',
    rating = 0,
    views = 0,
    likes = 0,
    type: subscriptionType = 'free',
    createdAt = new Date().toISOString(),
    reviews = []
  } = magazine;

  const getTypeIcon = () => {
    switch (type) {
      case 'magazine': return '📰';
      case 'article': return '📄';
      case 'digest': return '📋';
      default: return '📚';
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'magazine': return 'bg-blue-500';
      case 'article': return 'bg-green-500';
      case 'digest': return 'bg-purple-500';
      default: return 'bg-accent-gold';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getSubscriptionBadge = () => {
    return subscriptionType === 'pro' ? (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
        ⭐ PRO
      </span>
    ) : (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-400 to-green-600 text-white">
        🆓 FREE
      </span>
    );
  };

  return (
    <Link href={`/content/${_id}`} className="group block">
      <article className={`rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
        theme === 'dark' 
          ? 'bg-section-background border border-gray-800 hover:border-gray-700' 
          : 'bg-light-section-background border border-gray-200 hover:border-gray-300'
      }`}>
        {/* Image */}
        <div className="relative overflow-hidden h-40 sm:h-48">
          <Image 
            src={image || 'https://via.placeholder.com/400x300/1f2937/ffffff?text=EchoReads'} 
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getTypeColor()}`}>
              {getTypeIcon()} {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
            {getSubscriptionBadge()}
          </div>
          {rating > 0 && (
            <div className="absolute top-3 right-3">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                theme === 'dark' 
                  ? 'bg-black bg-opacity-50 text-white' 
                  : 'bg-white bg-opacity-90 text-gray-800'
              }`}>
                ⭐ {rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Category */}
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
              theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
            }`}>
              {category}
            </span>
            <span className={`text-xs transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              📅 {formatDate(createdAt)}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-lg font-bold mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-accent-gold ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            {title}
          </h3>

          {/* Description */}
          <p className={`text-sm mb-4 line-clamp-3 transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            {description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className={`text-xs transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                👁️ {views} views
              </span>
              <span className={`text-xs transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                ❤️ {likes} likes
              </span>
              <span className={`text-xs transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                📱 Read in App
              </span>
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {reviews.length > 0 && (
                <span className={`text-xs transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  💬 {reviews.length} reviews
                </span>
              )}
            </div>
            
            {/* Read More */}
            <span className={`text-xs font-medium transition-colors duration-300 ${
              theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
            }`}>
              Read More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ContentCard;

