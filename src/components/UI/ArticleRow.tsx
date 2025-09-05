import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Magazine } from '../../services/api';

interface ArticleRowProps {
  article: Magazine;
}

const ArticleRow: React.FC<ArticleRowProps> = ({ article }) => {
  const { theme } = useTheme();

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return '📄';
      default: return '📖';
    }
  };

  return (
    <Link 
      to={`/content/${article._id}`}
      className={`block transition-all duration-200 hover:scale-[1.02] ${
        theme === 'dark' 
          ? 'hover:bg-gray-800' 
          : 'hover:bg-gray-50'
      }`}
    >
      <div className={`p-6 rounded-lg border transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background border-gray-700' 
          : 'bg-light-section-background border-gray-200'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Article Image */}
          <div className="flex-shrink-0">
            <img
              src={article.image}
              alt={article.name}
              className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/96x96/1f2937/ffffff?text=Article';
              }}
            />
          </div>

          {/* Article Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-lg">{getContentTypeIcon(article.magzineType)}</span>
              <h3 className={`text-lg font-semibold truncate transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                {article.name}
              </h3>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                article.type === 'pro' 
                  ? 'bg-accent-gold text-button-text' 
                  : 'bg-green-500 text-white'
              }`}>
                {article.type === 'pro' ? 'PRO' : 'FREE'}
              </span>
            </div>
            
            <p className={`text-sm mb-3 line-clamp-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              {article.description}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs">
                <span className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  📂 {article.category}
                </span>
                <span className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  👁️ {article.views} views
                </span>
                <span className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  ❤️ {article.likes} likes
                </span>
                <span className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  📱 Read in App
                </span>
              </div>
              
              <div className={`text-xs transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                {new Date(article.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Read Button */}
          <div className="flex-shrink-0">
            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                : 'bg-accent-gold text-button-text hover:bg-yellow-400'
            }`}>
              Read Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleRow;
