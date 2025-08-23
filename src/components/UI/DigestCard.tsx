import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Magazine } from '../../services/api';

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
      to={`/content/${digest._id}`}
      className={`block transition-all duration-200 hover:scale-[1.02] ${
        theme === 'dark' 
          ? 'hover:bg-gray-800' 
          : 'hover:bg-gray-50'
      }`}
    >
      <div className={`p-6 rounded-xl border-2 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background border-gray-600' 
          : 'bg-light-section-background border-gray-300'
      }`}>
        {/* Header with Icon and Type */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
              theme === 'dark' ? 'bg-accent-gold' : 'bg-accent-gold'
            }`}>
              {getContentTypeIcon(digest.magzineType)}
            </div>
            <div>
              <h3 className={`text-lg font-bold transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                {digest.name}
              </h3>
              <p className={`text-sm transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Digest • {digest.category}
              </p>
            </div>
          </div>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            digest.type === 'pro' 
              ? 'bg-accent-gold text-button-text' 
              : 'bg-green-500 text-white'
          }`}>
            {digest.type === 'pro' ? 'PRO' : 'FREE'}
          </span>
        </div>

        {/* Image and Description */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
          <img
            src={digest.image}
            alt={digest.name}
            className="w-full sm:w-20 h-32 sm:h-20 object-cover rounded-lg flex-shrink-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/80x80/1f2937/ffffff?text=Digest';
            }}
          />
          <div className="flex-1">
            <p className={`text-sm line-clamp-3 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              {digest.description}
            </p>
          </div>
        </div>

        {/* Stats and Date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs">
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
            <span className={`flex items-center space-x-1 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <span>📱</span>
              <span>Read in App</span>
            </span>
          </div>
          
          <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
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
