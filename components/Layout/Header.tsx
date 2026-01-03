'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-section-background/95 border-gray-800/50 shadow-lg shadow-black/10' 
        : 'bg-light-section-background/95 border-gray-200/50 shadow-lg shadow-gray-200/10'
    }`}>
      <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group" onClick={closeMobileMenu}>
            <div className="relative">
              <Image 
                src="/splash.png" 
                alt="EchoReads Logo" 
                width={40}
                height={40}
                className="sm:w-12 sm:h-12 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-xl sm:text-2xl transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                EchoReads
              </h1>
              <p className={`text-[10px] sm:text-xs transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Your Digital Reading Companion
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              href="/" 
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium text-sm lg:text-base transition-all duration-200 group relative ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800/50' 
                  : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
              }`}
            >
              {/* Custom Home Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </Link>
            <Link 
              href="/library" 
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium text-sm lg:text-base transition-all duration-200 group ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800/50' 
                  : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
              }`}
            >
              {/* Custom Library Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Library</span>
            </Link>
            <Link 
              href="/pricing" 
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium text-sm lg:text-base transition-all duration-200 group ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800/50' 
                  : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
              }`}
            >
              {/* Custom Pricing Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8m-4-4h8" />
              </svg>
              <span>Pricing</span>
            </Link>
            <Link 
              href="/download" 
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium text-sm lg:text-base transition-all duration-200 group ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-accent-gold hover:bg-gray-800/50' 
                  : 'text-light-primary-text hover:text-accent-gold hover:bg-gray-100'
              }`}
            >
              {/* Custom Download Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>Download</span>
            </Link>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Modern Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 ${
                theme === 'dark' 
                  ? 'text-yellow-400 hover:bg-yellow-400/10 focus:ring-offset-section-background' 
                  : 'text-gray-600 hover:bg-gray-600/10 focus:ring-offset-light-section-background'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden relative w-10 h-10 flex flex-col justify-center items-center transition-all duration-300 rounded-xl ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800/50' 
                  : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-5">
                <span 
                  className={`absolute top-0 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out rounded-full ${
                    isMobileMenuOpen 
                      ? 'rotate-45 translate-y-2' 
                      : 'translate-y-0'
                  }`}
                />
                <span 
                  className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out rounded-full -translate-y-1/2 ${
                    isMobileMenuOpen 
                      ? 'opacity-0 scale-x-0' 
                      : 'opacity-100 scale-x-100'
                  }`}
                />
                <span 
                  className={`absolute bottom-0 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out rounded-full ${
                    isMobileMenuOpen 
                      ? '-rotate-45 -translate-y-2' 
                      : 'translate-y-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-black/60 backdrop-blur-sm' 
            : 'bg-black/40 backdrop-blur-sm'
        }`} />
        
        <div 
          className={`absolute top-0 left-0 w-[300px] sm:w-80 h-screen transform transition-transform duration-300 ease-out overflow-hidden shadow-2xl ${
            theme === 'dark' 
              ? 'bg-section-background border-r border-gray-800/50' 
              : 'bg-light-section-background border-r border-gray-200/50'
          } ${
            isMobileMenuOpen 
              ? 'translate-x-0' 
              : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className={`p-6 border-b transition-colors duration-300 ${
            theme === 'dark' ? 'border-gray-800/50' : 'border-gray-200/50'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/splash.png" 
                  alt="EchoReads Logo" 
                  width={40}
                  height={40}
                  className="object-contain rounded-lg"
                />
                <h2 className={`font-bold text-xl transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  Menu
                </h2>
              </div>
              <button
                onClick={closeMobileMenu}
                className={`p-2 rounded-xl transition-colors duration-200 ${
                  theme === 'dark' 
                    ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800/50' 
                    : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col h-[calc(100vh-100px)] overflow-y-auto">
            <div className="flex-1 p-6 space-y-3">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800/50' 
                    : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-semibold text-lg">Home</span>
              </Link>

              <Link
                href="/library"
                onClick={closeMobileMenu}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800/50' 
                    : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="font-semibold text-lg">Library</span>
              </Link>

              <Link
                href="/pricing"
                onClick={closeMobileMenu}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800/50' 
                    : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8m-4-4h8" />
                </svg>
                <span className="font-semibold text-lg">Pricing</span>
              </Link>

              <Link
                href="/download"
                onClick={closeMobileMenu}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 bg-accent-gold text-button-text hover:bg-yellow-400`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span className="font-semibold text-lg">Download App</span>
              </Link>
            </div>

            {/* Theme Toggle */}
            <div className={`p-6 border-t transition-colors duration-300 ${
              theme === 'dark' ? 'border-gray-800/50' : 'border-gray-200/50'
            }`}>
              <button
                onClick={toggleTheme}
                className={`w-full flex items-center justify-center space-x-3 p-4 rounded-xl transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 text-primary-text hover:text-highlight-text hover:bg-gray-800' 
                    : 'bg-gray-100 text-light-primary-text hover:text-light-highlight-text hover:bg-gray-200'
                }`}
              >
                {theme === 'dark' ? (
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
                <span className="font-semibold text-lg">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
