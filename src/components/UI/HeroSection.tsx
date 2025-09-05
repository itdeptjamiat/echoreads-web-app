import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageUrl
}) => {
  const { theme } = useTheme();

  return (
    <section className={`py-16 lg:py-24 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-primary-background' 
        : 'bg-light-primary-background'
    }`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className={`text-accent-gold font-semibold text-sm uppercase tracking-wide transition-colors duration-300`}>
                {subtitle}
              </p>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                {title}
              </h1>
              <p className={`text-lg sm:text-xl transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={primaryButtonLink}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-accent-gold text-button-text hover:bg-yellow-400 shadow-lg hover:shadow-xl'
                    : 'bg-accent-gold text-button-text hover:bg-yellow-400 shadow-lg hover:shadow-xl'
                }`}
              >
                {primaryButtonText}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  to={secondaryButtonLink}
                  className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-button-text'
                      : 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-button-text'
                  }`}
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                { icon: '📱', text: 'Read Anywhere' },
                { icon: '⚡', text: 'Lightning Fast' },
                { icon: '🎨', text: 'Beautiful Design' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className={`font-medium transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Animated App Preview */}
          <div className="relative">
            <div className={`w-full h-64 sm:h-80 md:h-96 rounded-2xl shadow-2xl overflow-hidden ${
              theme === 'dark' 
                ? 'bg-section-background border border-gray-800' 
                : 'bg-light-section-background border border-gray-200'
            }`}>
              {/* Animated App Screenshots */}
              <div className="relative h-full">
                <div className="grid grid-cols-2 gap-2 sm:gap-4 h-full p-2 sm:p-4">
                  {/* First Column - Staggered Animation */}
                  <div className="space-y-2 sm:space-y-4">
                    {[
                      { src: '/app images/s1.jpeg', delay: '0s' },
                      { src: '/app images/s3.jpeg', delay: '1.5s' },
                      { src: '/app images/s5.jpeg', delay: '3s' }
                    ].map((image, index) => (
                      <div
                        key={index}
                        className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                        }`}
                        style={{
                          animation: `fadeInUp 2s ease-out ${image.delay} both, float 6s ease-in-out ${image.delay} infinite`
                        }}
                      >
                        <img
                          src={image.src}
                          alt={`EchoReads App Screenshot ${index + 1}`}
                          className="w-full h-auto object-cover"
                          style={{
                            clipPath: 'polygon(0 8%, 100% 8%, 100% 100%, 0% 100%)'
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Second Column - Staggered Animation */}
                  <div className="space-y-2 sm:space-y-4">
                    {[
                      { src: '/app images/s2.jpeg', delay: '0.75s' },
                      { src: '/app images/s4.jpeg', delay: '2.25s' },
                      { src: '/app images/s6.jpeg', delay: '3.75s' }
                    ].map((image, index) => (
                      <div
                        key={index}
                        className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                        }`}
                        style={{
                          animation: `fadeInUp 2s ease-out ${image.delay} both, float 6s ease-in-out ${image.delay} infinite`
                        }}
                      >
                        <img
                          src={image.src}
                          alt={`EchoReads App Screenshot ${index + 4}`}
                          className="w-full h-auto object-cover"
                          style={{
                            clipPath: 'polygon(0 8%, 100% 8%, 100% 100%, 0% 100%)'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-accent-gold rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-accent-gold rounded-full opacity-30 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
