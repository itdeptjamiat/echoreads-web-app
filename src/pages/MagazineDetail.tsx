import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ErrorMessage from '../components/UI/ErrorMessage';
import { useMagazine } from '../hooks/useMagazine';

const MagazineDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const { magazine, loading, error, refetch } = useMagazine(id || '');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getSubscriptionBadge = () => {
    if (!magazine) return null;
    
    return magazine.type === 'pro' ? (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
        ⭐ PRO
      </span>
    ) : (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-400 to-green-600 text-white">
        🆓 FREE
      </span>
    );
  };

  const getTypeIcon = () => {
    if (!magazine) return '📚';
    
    switch (magazine.magzineType) {
      case 'magzine': return '📰';
      case 'article': return '📄';
      case 'digest': return '📋';
      default: return '📚';
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}>
        <LoadingSpinner text="Loading magazine..." />
      </div>
    );
  }

  if (error || !magazine) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}>
        <ErrorMessage message={error || 'Magazine not found'} onRetry={refetch} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      {/* Header */}
      <div className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background border-gray-800' 
          : 'bg-light-section-background border-gray-200'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/magazines"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text' 
                  : 'text-light-primary-text hover:text-light-highlight-text'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Magazines</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              {getSubscriptionBadge()}
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                theme === 'dark' ? 'bg-gray-800 text-primary-text' : 'bg-gray-100 text-light-primary-text'
              }`}>
                {getTypeIcon()} {magazine.magzineType.charAt(0).toUpperCase() + magazine.magzineType.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
              <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Actions */}
          <div className="lg:col-span-1">
            <div className={`rounded-xl overflow-hidden shadow-xl transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background' : 'bg-white'
            }`}>
              {/* Magazine Cover */}
              <div className="relative">
                <img 
                  src={magazine.image} 
                  alt={magazine.name}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x600/1f2937/ffffff?text=EchoReads';
                  }}
                />
                <div className="absolute top-4 left-4">
                  {getSubscriptionBadge()}
                </div>
                {magazine.rating > 0 && (
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${
                      theme === 'dark' 
                        ? 'bg-black bg-opacity-50 text-white' 
                        : 'bg-white bg-opacity-90 text-gray-800'
                    }`}>
                      ⭐ {magazine.rating.toFixed(1)}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="p-6 space-y-4">
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                    : 'bg-accent-gold text-button-text hover:bg-yellow-400'
                }`}>
                  📖 Read Now
                </button>
                
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 border-2 ${
                  theme === 'dark'
                    ? 'border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-button-text'
                    : 'border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-button-text'
                }`}>
                  📥 Download PDF
                </button>

                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-primary-text hover:bg-gray-700'
                    : 'bg-gray-100 text-light-primary-text hover:bg-gray-200'
                }`}>
                  ❤️ Like ({magazine.likes})
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2">
            <div className={`rounded-xl p-8 transition-colors duration-300 ${
              theme === 'dark' ? 'bg-section-background' : 'bg-white'
            }`}>
              {/* Title and Category */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                    theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
                  }`}>
                    {magazine.category}
                  </span>
                  <span className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    📅 {formatDate(magazine.createdAt)}
                  </span>
                </div>
                
                <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  {magazine.name}
                </h1>
                
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  {magazine.description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className={`text-center p-4 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <div className={`text-2xl font-bold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {magazine.views}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    👁️ Views
                  </div>
                </div>
                
                <div className={`text-center p-4 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <div className={`text-2xl font-bold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {magazine.likes}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    ❤️ Likes
                  </div>
                </div>
                
                <div className={`text-center p-4 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <div className={`text-2xl font-bold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {magazine.downloads}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    📥 Downloads
                  </div>
                </div>
                
                <div className={`text-center p-4 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <div className={`text-2xl font-bold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {magazine.reviews.length}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    💬 Reviews
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              {magazine.reviews.length > 0 && (
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    Reviews ({magazine.reviews.length})
                  </h3>
                  
                  <div className="space-y-4">
                    {magazine.reviews.map((review) => (
                      <div key={review._id} className={`p-4 rounded-lg transition-colors duration-300 ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-medium transition-colors duration-300 ${
                              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                            }`}>
                              User {review.userId}
                            </span>
                            <span className="text-yellow-400">⭐ {review.rating}</span>
                          </div>
                          <span className={`text-xs transition-colors duration-300 ${
                            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                          }`}>
                            {formatDate(review.time)}
                          </span>
                        </div>
                        <p className={`transition-colors duration-300 ${
                          theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                        }`}>
                          {review.review}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div className={`border-t pt-6 transition-colors duration-300 ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  Additional Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      Magazine ID:
                    </span>
                    <span className={`ml-2 text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {magazine.mid}
                    </span>
                  </div>
                  
                  <div>
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      File Type:
                    </span>
                    <span className={`ml-2 text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {magazine.fileType.toUpperCase()}
                    </span>
                  </div>
                  
                  <div>
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      Status:
                    </span>
                    <span className={`ml-2 text-sm transition-colors duration-300 ${
                      magazine.isActive 
                        ? 'text-green-500' 
                        : theme === 'dark' ? 'text-red-400' : 'text-red-600'
                    }`}>
                      {magazine.isActive ? '✅ Active' : '❌ Inactive'}
                    </span>
                  </div>
                  
                  <div>
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      Total Pages:
                    </span>
                    <span className={`ml-2 text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {magazine.total_pages || 'Not specified'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineDetail;
