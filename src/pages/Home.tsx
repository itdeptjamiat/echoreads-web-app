import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import HeroSection from '../components/UI/HeroSection';
import ContentCard from '../components/UI/ContentCard';
import ArticleRow from '../components/UI/ArticleRow';
import DigestCard from '../components/UI/DigestCard';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ErrorMessage from '../components/UI/ErrorMessage';
import { useMagazines } from '../hooks/useMagazines';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { magazines, loading, error, refetch } = useMagazines();
  useScrollToTop();

  // Get content by type
  const featuredMagazines = Array.isArray(magazines) ? magazines.filter(m => m.magzineType === 'magzine').slice(0, 3) : [];
  const featuredArticles = Array.isArray(magazines) ? magazines.filter(m => m.magzineType === 'article').slice(0,3) : [];
  const featuredDigests = Array.isArray(magazines) ? magazines.filter(m => m.magzineType === 'digest').slice(0, 3) : [];

  // Get categories from magazines with counts
  const categoryCounts = Array.isArray(magazines) ? magazines.reduce((acc, magazine) => {
    acc[magazine.category] = (acc[magazine.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>) : {};

  const categories = [
    { name: 'Technology', icon: '💻', count: categoryCounts['Technology'] || 0 },
    { name: 'Business', icon: '💼', count: categoryCounts['Business'] || 0 },
    { name: 'Health', icon: '🏥', count: categoryCounts['Health'] || 0 },
    { name: 'Lifestyle', icon: '🌟', count: categoryCounts['Lifestyle'] || 0 },
    { name: 'Travel', icon: '✈️', count: categoryCounts['Travel'] || 0 },
    { name: 'Finance', icon: '💰', count: categoryCounts['Finance'] || 0 },
    { name: 'Arts', icon: '🎨', count: categoryCounts['Arts'] || 0 },
    { name: 'Education', icon: '📚', count: categoryCounts['Education'] || 0 },
    { name: 'Automotive', icon: '🚗', count: categoryCounts['Automotive'] || 0 },
    { name: 'Fashion', icon: '👗', count: categoryCounts['Fashion'] || 0 },
    { name: 'Environment', icon: '🌍', count: categoryCounts['Environment'] || 0 }
  ].filter(cat => cat.count > 0);

  // Show loading state
  if (loading) {
    return (
      <div>
        <HeroSection
          title="Your Digital Reading Companion"
          subtitle="Welcome to EchoReads"
          description="Discover the world's best magazines, articles, and digests in one beautiful app. Read anywhere, anytime with our seamless reading experience."
          primaryButtonText="Download App"
          primaryButtonLink="/download"
          secondaryButtonText="Explore Content"
          secondaryButtonLink="/magazines"
        />
        <LoadingSpinner text="Loading magazines..." />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div>
        <HeroSection
          title="Your Digital Reading Companion"
          subtitle="Welcome to EchoReads"
          description="Discover the world's best magazines, articles, and digests in one beautiful app. Read anywhere, anytime with our seamless reading experience."
          primaryButtonText="Download App"
          primaryButtonLink="/download"
          secondaryButtonText="Explore Content"
          secondaryButtonLink="/magazines"
        />
        <ErrorMessage message={error} onRetry={refetch} />
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Your Digital Reading Companion"
        subtitle="Welcome to EchoReads"
        description="Discover the world's best magazines, articles, and digests in one beautiful app. Read anywhere, anytime with our seamless reading experience."
        primaryButtonText="Download App"
        primaryButtonLink="/download"
        secondaryButtonText="Explore Content"
        secondaryButtonLink="/magazines"
      />

      {/* Categories Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background' 
          : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Explore by Category
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Find content that matches your interests
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                className={`group p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg ${
                  theme === 'dark' 
                    ? 'bg-primary-background border border-gray-800 hover:border-gray-700' 
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className={`font-semibold mb-1 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  {category.name}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  {category.count} articles
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Magazines Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary-background' 
          : 'bg-light-primary-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Featured Magazines
              </h2>
              <p className={`text-lg transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Premium magazines covering various topics
              </p>
            </div>
            <Link
              to="/magazines"
              className={`font-semibold transition-colors duration-300 hover:underline ${
                theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
              }`}
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {featuredMagazines.length > 0 ? (
              featuredMagazines.map((magazine) => (
                <ContentCard key={magazine._id} magazine={magazine} />
              ))
            ) : (
              <div className={`col-span-full text-center py-12 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <div className="text-6xl mb-4">📰</div>
                <h3 className="text-xl font-semibold mb-2">No magazines available</h3>
                <p>Check back later for new content.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background' 
          : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Featured Articles
              </h2>
              <p className={`text-lg transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                In-depth articles on trending topics
              </p>
            </div>
            <Link
              to="/articles"
              className={`font-semibold transition-colors duration-300 hover:underline ${
                theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
              }`}
            >
              View All →
            </Link>
          </div>

          <div className="space-y-4">
            {featuredArticles.length > 0 ? (
              featuredArticles.map((article) => (
                <ArticleRow key={article._id} article={article} />
              ))
            ) : (
              <div className={`text-center py-12 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <div className="text-6xl mb-4">📄</div>
                <h3 className="text-xl font-semibold mb-2">No articles available</h3>
                <p>Check back later for new content.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Digests Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary-background' 
          : 'bg-light-primary-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Featured Digests
              </h2>
              <p className={`text-lg transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Curated summaries of the best content
              </p>
            </div>
            <Link
              to="/digests"
              className={`font-semibold transition-colors duration-300 hover:underline ${
                theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
              }`}
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {featuredDigests.length > 0 ? (
              featuredDigests.map((digest) => (
                <DigestCard key={digest._id} digest={digest} />
              ))
            ) : (
              <div className={`col-span-full text-center py-12 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-2">No digests available</h3>
                <p>Check back later for new content.</p>
              </div>
            )}
          </div>
        </div>
      </section>



      {/* App Features Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background' 
          : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Why Choose EchoReads?
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Experience reading like never before
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
            {[
              {
                icon: '📱',
                title: 'Mobile First',
                description: 'Optimized for reading on your phone and tablet'
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Instant loading and smooth navigation'
              },
              {
                icon: '🎨',
                title: 'Beautiful Design',
                description: 'Elegant interface that adapts to your theme'
              },
              {
                icon: '📚',
                title: 'Vast Library',
                description: 'Access to thousands of premium publications'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  {feature.title}
                </h3>
                <p className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
