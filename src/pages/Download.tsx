import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import HeroSection from '../components/UI/HeroSection';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Download: React.FC = () => {
  const { theme } = useTheme();
  useScrollToTop();

  const features = [
    {
      icon: '📱',
      title: 'Cross-Platform',
      description: 'Available on iOS, Android, and Web'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Instant loading and smooth performance'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Elegant design with dark/light themes'
    },
    {
      icon: '📚',
      title: 'Vast Library',
      description: 'Access to thousands of publications'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Your data is safe and private'
    },
    {
      icon: '🔄',
      title: 'Sync',
      description: 'Seamless sync across all devices'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Analyst',
      content: 'EchoReads has transformed how I consume content. The interface is intuitive and the content quality is outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      content: 'Perfect for busy professionals. I can read anywhere, anytime, and the offline mode is a lifesaver.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Marketing Manager',
      content: 'The curated digests save me hours of reading time. Highly recommended for anyone who wants to stay informed.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Download EchoReads"
        subtitle="Get Started Today"
        description="Join millions of readers who have discovered the perfect way to consume magazines, articles, and digests. Download now and start your reading journey."
        primaryButtonText="Download for iOS"
        primaryButtonLink="https://apps.apple.com/my/app/echoreads/id6754093803"
        secondaryButtonText="Download for Android"
        secondaryButtonLink="https://play.google.com/store/apps/details?id=com.iqbal.echoreads&hl=en"
      />

      {/* App Preview Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary-background' 
          : 'bg-light-primary-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              App Preview
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              See EchoReads in action with these beautiful screenshots
            </p>
          </div>

          {/* App Screenshots Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              { src: '/app images/s1.jpeg', alt: 'EchoReads App Screenshot 1' },
              { src: '/app images/s2.jpeg', alt: 'EchoReads App Screenshot 2' },
              { src: '/app images/s3.jpeg', alt: 'EchoReads App Screenshot 3' },
              { src: '/app images/s4.jpeg', alt: 'EchoReads App Screenshot 4' },
              { src: '/app images/s5.jpeg', alt: 'EchoReads App Screenshot 5' },
              { src: '/app images/s6.jpeg', alt: 'EchoReads App Screenshot 6' }
            ].map((image, index) => (
              <div key={index} className="group">
                <div className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    theme === 'dark' ? 'from-gray-900/50' : 'from-black/50'
                  }`}>
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className={`text-xs text-white font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-white'
                      }`}>
                        Screenshot {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* App Features Highlight */}
          <div className="mt-12 text-center">
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Experience the beautiful interface, smooth navigation, and powerful features
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
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
              Choose Your Platform
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Available on all your favorite devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* iOS Download */}
            <div id="ios-download" className={`p-8 rounded-2xl text-center transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-primary-background border border-gray-800' 
                : 'bg-white border border-gray-200'
            }`}>
              <div className="text-6xl mb-4">📱</div>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                iOS App
              </h3>
              <p className={`mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Optimized for iPhone and iPad with native iOS features
              </p>
              <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 ${
                theme === 'dark'
                  ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                  : 'bg-accent-gold text-button-text hover:bg-yellow-400'
              }`}>
                Download for iOS
              </button>
              <p className={`text-sm mt-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Requires iOS 13.0 or later
              </p>
            </div>

            {/* Android Download */}
            <div id="android-download" className={`p-8 rounded-2xl text-center transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-primary-background border border-gray-800' 
                : 'bg-white border border-gray-200'
            }`}>
              <div className="text-6xl mb-4">🤖</div>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                Android App
              </h3>
              <p className={`mb-6 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Designed for Android with Material Design principles
              </p>
              <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 ${
                theme === 'dark'
                  ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                  : 'bg-accent-gold text-button-text hover:bg-yellow-400'
              }`}>
                Download for Android
              </button>
              <p className={`text-sm mt-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Requires Android 8.0 or later
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary-background' 
          : 'bg-light-primary-background'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl text-center transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-section-background border border-gray-800' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
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

      {/* Testimonials Section */}
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
              What Our Users Say
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Join thousands of satisfied readers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-xl transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-primary-background border border-gray-800' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent-gold">⭐</span>
                  ))}
                </div>
                <p className={`mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  "{testimonial.content}"
                </p>
                <div>
                  <p className={`font-semibold transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary-background' 
          : 'bg-light-primary-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Ready to Start Reading?
          </h2>
          <p className={`text-lg mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Download EchoReads today and transform your reading experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 ${
              theme === 'dark'
                ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                : 'bg-accent-gold text-button-text hover:bg-yellow-400'
            }`}>
              Download Now
            </button>
            <button className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 ${
              theme === 'dark'
                ? 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-button-text'
                : 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-button-text'
            }`}>
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
