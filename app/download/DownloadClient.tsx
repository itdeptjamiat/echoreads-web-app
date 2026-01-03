'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import HeroSection from '@/components/UI/HeroSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import Link from 'next/link';

const DownloadClient: React.FC = () => {
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
      {/* App Preview Section - First */}
      <section className={`py-8 sm:py-12 lg:py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary-background' 
          : 'bg-light-primary-background'
      }`}>
        <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Download EchoReads
            </h1>
            <p className={`text-sm sm:text-base lg:text-xl transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Experience the perfect reading companion on your device
            </p>
          </div>

          {/* Full View App Screenshot */}
          <div className="max-w-7xl mx-auto mb-6 sm:mb-8 lg:mb-12">
            <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl transition-all duration-300 ${
              theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <Image
                src="/app images/full view all screen.png"
                alt="EchoReads mobile app interface showing magazine library, reading view, and navigation"
                width={2000}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/my/app/echoreads/id6754093803"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto ${
                theme === 'dark'
                  ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                  : 'bg-accent-gold text-button-text hover:bg-yellow-400'
              }`}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.03-1.68-1.11-3.38-2.23-5.08-3.34-1.62-1.07-2.98-2.47-3.24-4.51-.3-2.3.78-4.07 2.34-5.25.83-.61 1.78-1.01 2.75-1.18 1.24-.22 2.49-.13 3.74.1 1.5.27 2.9.81 4.19 1.58.45.27.87.57 1.28.9.1.08.19.17.28.26.01.01.02.02.03.03l.01.01c.01.01.02.02.03.03.09.09.18.18.28.26.41.33.83.63 1.28.9 1.29.77 2.69 1.31 4.19 1.58 1.25.23 2.5.32 3.74.1.97.17 1.92.57 2.75 1.18 1.56 1.18 2.64 2.95 2.34 5.25-.26 2.04-1.62 3.44-3.24 4.51-1.7 1.11-3.4 2.23-5.08 3.34-1.03.85-2.1.92-3.08-.03z"/>
              </svg>
              Download for iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.iqbal.echoreads&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto ${
                theme === 'dark'
                  ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                  : 'bg-accent-gold text-button-text hover:bg-yellow-400'
              }`}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Download for Android
            </a>
          </div>
        </div>
      </section>

      {/* Your Digital Library Section */}
      <section className={`py-8 sm:py-12 lg:py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background' 
          : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Your Digital Library
            </h2>
            <p className={`text-sm sm:text-base lg:text-xl transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Access thousands of premium magazines, articles, and digests
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            {[
              {
                icon: '📚',
                title: 'Vast Collection',
                description: 'Access to thousands of premium publications from around the world'
              },
              {
                icon: '📱',
                title: 'Read Anywhere',
                description: 'Sync across all your devices and read offline anytime, anywhere'
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Instant loading and smooth navigation for the best reading experience'
              },
              {
                icon: '🎨',
                title: 'Beautiful Design',
                description: 'Elegant interface with dark and light themes to suit your preference'
              },
              {
                icon: '🔒',
                title: 'Secure & Private',
                description: 'Your data is safe and private with industry-standard encryption'
              },
              {
                icon: '🔄',
                title: 'Auto Sync',
                description: 'Seamless synchronization across all your devices automatically'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-primary-background border border-gray-800 hover:border-accent-gold' 
                    : 'bg-white border border-gray-200 hover:border-accent-gold'
                }`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-4">{feature.icon}</div>
                <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Platform Section */}
      <section className={`py-8 sm:py-12 lg:py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary-background' 
          : 'bg-light-primary-background'
      }`}>
        <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Choose Your Platform
            </h2>
            <p className={`text-sm sm:text-base lg:text-xl transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Available on iOS and Android - Same great experience everywhere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* iOS Download */}
            <div className={`group relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-accent-gold' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-accent-gold'
            }`}>
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-accent-gold/10 rounded-full blur-2xl group-hover:bg-accent-gold/20 transition-all duration-300" />
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl lg:text-7xl mb-3 sm:mb-4 lg:mb-6 transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">📱</div>
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  iOS App
                </h3>
                <p className={`mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  Optimized for iPhone and iPad with native iOS features and seamless integration
                </p>
                <a
                  href="https://apps.apple.com/my/app/echoreads/id6754093803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full py-2.5 sm:py-3 lg:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                    theme === 'dark'
                      ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                      : 'bg-accent-gold text-button-text hover:bg-yellow-400'
                  }`}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.03-1.68-1.11-3.38-2.23-5.08-3.34-1.62-1.07-2.98-2.47-3.24-4.51-.3-2.3.78-4.07 2.34-5.25.83-.61 1.78-1.01 2.75-1.18 1.24-.22 2.49-.13 3.74.1 1.5.27 2.9.81 4.19 1.58.45.27.87.57 1.28.9.1.08.19.17.28.26.01.01.02.02.03.03l.01.01c.01.01.02.02.03.03.09.09.18.18.28.26.41.33.83.63 1.28.9 1.29.77 2.69 1.31 4.19 1.58 1.25.23 2.5.32 3.74.1.97.17 1.92.57 2.75 1.18 1.56 1.18 2.64 2.95 2.34 5.25-.26 2.04-1.62 3.44-3.24 4.51-1.7 1.11-3.4 2.23-5.08 3.34-1.03.85-2.1.92-3.08-.03z"/>
                  </svg>
                  Download for iOS
                </a>
                <p className={`text-xs sm:text-sm mt-2 sm:mt-3 lg:mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  Requires iOS 13.0 or later
                </p>
              </div>
            </div>

            {/* Android Download */}
            <div className={`group relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-accent-gold' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-accent-gold'
            }`}>
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-accent-gold/10 rounded-full blur-2xl group-hover:bg-accent-gold/20 transition-all duration-300" />
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl lg:text-7xl mb-3 sm:mb-4 lg:mb-6 transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">🤖</div>
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  Android App
                </h3>
                <p className={`mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base lg:text-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  Designed for Android with Material Design principles and Google Play integration
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.iqbal.echoreads&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full py-2.5 sm:py-3 lg:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                    theme === 'dark'
                      ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                      : 'bg-accent-gold text-button-text hover:bg-yellow-400'
                  }`}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Download for Android
                </a>
                <p className={`text-xs sm:text-sm mt-2 sm:mt-3 lg:mt-4 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  Requires Android 8.0 or later
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DownloadClient;

