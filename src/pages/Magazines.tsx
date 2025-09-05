import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ContentCard from '../components/UI/ContentCard';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ErrorMessage from '../components/UI/ErrorMessage';
import { useMagazinesByType } from '../hooks/useMagazines';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Magazines: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { magazines, loading, error, refetch } = useMagazinesByType('magzine');
  useScrollToTop();

  // Get unique categories from magazines
  const categories = ['all', ...Array.from(new Set(magazines.map(mag => mag.category)))];

  const filteredMagazines = selectedCategory === 'all' 
    ? magazines 
    : magazines.filter(magazine => magazine.category === selectedCategory);

  // Show loading state
  if (loading) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}>
        <LoadingSpinner text="Loading magazines..." />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}>
        <ErrorMessage message={error} onRetry={refetch} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>

      {/* Filter Section */}
      <section className={`py-8 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background' 
          : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-accent-gold text-button-text'
                    : theme === 'dark'
                      ? 'bg-primary-background text-primary-text hover:bg-gray-800'
                      : 'bg-white text-light-primary-text hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Magazines Grid */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary-background' 
          : 'bg-light-primary-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="mb-8">
            <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              {selectedCategory === 'all' ? 'All Magazines' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Magazines`}
            </h2>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              {filteredMagazines.length} magazine{filteredMagazines.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredMagazines.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {filteredMagazines.map((magazine) => (
                <ContentCard key={magazine._id} magazine={magazine} />
              ))}
            </div>
          ) : (
            <div className={`text-center py-12 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">No magazines found</h3>
              <p>Try selecting a different category or check back later for new content.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background' 
          : 'bg-light-section-background'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Stay Updated
          </h2>
          <p className={`text-lg mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Get notified when new magazines are published
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 px-4 py-3 rounded-lg border transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-primary-background border-gray-700 text-primary-text placeholder-gray-400'
                  : 'bg-white border-gray-300 text-light-primary-text placeholder-gray-500'
              }`}
            />
            <button className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
              theme === 'dark'
                ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                : 'bg-accent-gold text-button-text hover:bg-yellow-400'
            }`}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Magazines;
