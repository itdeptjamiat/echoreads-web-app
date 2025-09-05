import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useMagazine } from '../hooks/useMagazine';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ErrorMessage from '../components/UI/ErrorMessage';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ContentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { user } = useAuth();
  const { magazine, loading, error, refetch } = useMagazine(id || '');
  const [isReading, setIsReading] = useState(false);
  useScrollToTop();

  const handleReadNow = () => {
    setIsReading(true);
    // Check if user is authenticated
    if (user) {
      // Redirect to payment page with return URL
      navigate('/payment', { 
        state: { 
          returnUrl: `/content/${id}`,
          message: 'Choose a plan to read this content'
        }
      });
    } else {
      // Redirect to login page with return URL
      navigate('/login', { 
        state: { 
          returnUrl: `/content/${id}`,
          message: 'Please login or sign up to read this content'
        }
      });
    }
  };

  const handleDownloadApp = () => {
    // Redirect to download page or app store
    navigate('/download');
  };

  // Show loading state
  if (loading) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}>
        <LoadingSpinner text="Loading content..." />
      </div>
    );
  }

  // Show error state
  if (error || !magazine) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}>
        <ErrorMessage message={error || 'Content not found'} onRetry={refetch} />
      </div>
    );
  }

  const getContentTypeLabel = (type: string) => {
    switch (type) {
      case 'magzine': return 'Magazine';
      case 'article': return 'Article';
      case 'digest': return 'Digest';
      default: return 'Content';
    }
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'magzine': return '📰';
      case 'article': return '📄';
      case 'digest': return '📋';
      default: return '📖';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 scroll-smooth ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      {/* Hero Section */}
      <section className={`relative py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Image */}
            <div className="relative">
              <img
                src={magazine.image}
                alt={magazine.name}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400x600/1f2937/ffffff?text=EchoReads';
                }}
              />
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  magazine.type === 'pro' 
                    ? 'bg-accent-gold text-button-text' 
                    : 'bg-green-500 text-white'
                }`}>
                  {magazine.type === 'pro' ? 'PRO' : 'FREE'}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white">
                  {getContentTypeIcon(magazine.magzineType)} {getContentTypeLabel(magazine.magzineType)}
                </span>
              </div>
            </div>

            {/* Content Info */}
            <div className="space-y-6">
              <div>
                <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  {magazine.name}
                </h1>
                <p className={`text-lg mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  {magazine.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className={`text-center p-4 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-primary-background' : 'bg-white'
                }`}>
                  <div className={`text-2xl font-bold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {magazine.views}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    Views
                  </div>
                </div>
                <div className={`text-center p-4 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-primary-background' : 'bg-white'
                }`}>
                  <div className={`text-2xl font-bold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {magazine.likes}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    Likes
                  </div>
                </div>
                <div className={`text-center p-4 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-primary-background' : 'bg-white'
                }`}>
                  <div className={`text-2xl font-bold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {magazine.downloads}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    Downloads
                  </div>
                </div>
                <div className={`text-center p-4 rounded-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'bg-primary-background' : 'bg-white'
                }`}>
                  <div className={`text-2xl font-bold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {magazine.rating.toFixed(1)}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    Rating
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleReadNow}
                  disabled={isReading}
                  className={`flex-1 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    isReading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-accent-gold text-button-text hover:bg-yellow-400 transform hover:scale-105'
                  }`}
                >
                  {isReading ? 'Redirecting...' : '📖 Read Now'}
                </button>
                <button
                  onClick={handleDownloadApp}
                  className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-primary-background text-primary-text hover:bg-gray-800 border border-gray-600'
                      : 'bg-white text-light-primary-text hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  📱 Download App
                </button>
              </div>

              {/* Category */}
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'bg-primary-background text-primary-text' : 'bg-white text-light-primary-text'
              }`}>
                📂 {magazine.category}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {magazine.reviews && magazine.reviews.length > 0 && (
        <section className={`py-16 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
        }`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Reviews ({magazine.reviews.length})
            </h2>
            <div className="space-y-6">
              {magazine.reviews.map((review, index) => (
                <div
                  key={review._id || index}
                  className={`p-6 rounded-lg transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center text-button-text font-bold">
                        {review.userId.toString().slice(-2)}
                      </div>
                      <div>
                        <div className={`font-semibold transition-colors duration-300 ${
                          theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                        }`}>
                          User {review.userId}
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={`text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      {new Date(review.time).toLocaleDateString()}
                    </div>
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
        </section>
      )}

      {/* Related Content Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <h2 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            More {getContentTypeLabel(magazine.magzineType)}s
          </h2>
          <div className="text-center">
            <button
              onClick={() => navigate(`/${magazine.magzineType === 'magzine' ? 'magazines' : magazine.magzineType === 'article' ? 'articles' : 'digests'}`)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-primary-background text-primary-text hover:bg-gray-800 border border-gray-600'
                  : 'bg-white text-light-primary-text hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Browse All {getContentTypeLabel(magazine.magzineType)}s
            </button>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
          theme === 'dark'
            ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
            : 'bg-accent-gold text-button-text hover:bg-yellow-400'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default ContentDetail;
