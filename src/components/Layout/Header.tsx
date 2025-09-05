import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import UserProfile from '../UI/UserProfile';
import MobileUserProfile from '../UI/MobileUserProfile';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
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
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-section-background border-gray-800' 
        : 'bg-light-section-background border-gray-200'
    }`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <img 
              src="/splash.png" 
              alt="EchoReads Logo" 
              className="w-10 h-10 object-contain rounded-lg"
            />
            <div className="hidden sm:block">
              <h1 className={`font-bold text-xl transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                EchoReads
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Your Digital Reading Companion
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors duration-200 ${
              theme === 'dark' 
                ? 'text-primary-text hover:text-highlight-text' 
                : 'text-light-primary-text hover:text-light-highlight-text'
            }`}>
              Home
            </Link>
            <Link to="/magazines" className={`font-medium transition-colors duration-200 ${
              theme === 'dark' 
                ? 'text-primary-text hover:text-highlight-text' 
                : 'text-light-primary-text hover:text-light-highlight-text'
            }`}>
              Magazines
            </Link>
            <Link to="/articles" className={`font-medium transition-colors duration-200 ${
              theme === 'dark' 
                ? 'text-primary-text hover:text-highlight-text' 
                : 'text-light-primary-text hover:text-light-highlight-text'
            }`}>
              Articles
            </Link>
            <Link to="/digests" className={`font-medium transition-colors duration-200 ${
              theme === 'dark' 
                ? 'text-primary-text hover:text-highlight-text' 
                : 'text-light-primary-text hover:text-light-highlight-text'
            }`}>
              Digests
            </Link>
            <Link to="/pricing" className={`font-medium transition-colors duration-200 ${
              theme === 'dark' 
                ? 'text-primary-text hover:text-highlight-text' 
                : 'text-light-primary-text hover:text-light-highlight-text'
            }`}>
              Pricing
            </Link>
            <Link to="/download" className={`font-medium transition-colors duration-200 ${
              theme === 'dark' 
                ? 'text-primary-text hover:text-highlight-text' 
                : 'text-light-primary-text hover:text-light-highlight-text'
            }`}>
              Download App
            </Link>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Clean Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 hover:bg-opacity-10 ${
                theme === 'dark' 
                  ? 'text-yellow-400 hover:bg-yellow-400 focus:ring-offset-section-background' 
                  : 'text-gray-600 hover:bg-gray-600 focus:ring-offset-light-section-background'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* User Authentication */}
            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-3">
                <UserProfile />
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-primary-background text-primary-text hover:bg-gray-800 border border-gray-600'
                      : 'bg-white text-light-primary-text hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-accent-gold text-button-text hover:bg-yellow-400`}
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Beautiful Animated Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden relative w-10 h-10 flex flex-col justify-center items-center transition-all duration-300 rounded-lg hover:bg-opacity-10 ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text hover:bg-white' 
                  : 'text-light-primary-text hover:text-light-highlight-text hover:bg-black'
              }`}
              aria-label="Toggle mobile menu"
            >
              {/* Beautiful Hamburger Icon */}
              <div className="relative w-6 h-5">
                {/* Top Line */}
                <span 
                  className={`absolute top-0 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out rounded-full ${
                    isMobileMenuOpen 
                      ? 'rotate-45 translate-y-2' 
                      : 'translate-y-0'
                  }`}
                />
                {/* Middle Line */}
                <span 
                  className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out rounded-full -translate-y-1/2 ${
                    isMobileMenuOpen 
                      ? 'opacity-0 scale-x-0' 
                      : 'opacity-100 scale-x-100'
                  }`}
                />
                {/* Bottom Line */}
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

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        {/* Backdrop */}
        <div className={`absolute inset-0 transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-black bg-opacity-50' 
            : 'bg-black bg-opacity-30'
        }`} />
        
        {/* Mobile Menu Panel */}
        <div 
          className={`absolute top-0 left-0 w-80 h-screen transform transition-transform duration-300 ease-in-out overflow-hidden ${
            theme === 'dark' 
              ? 'bg-section-background border-r border-gray-800' 
              : 'bg-light-section-background border-r border-gray-200'
          } ${
            isMobileMenuOpen 
              ? 'translate-x-0' 
              : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className={`p-6 border-b transition-colors duration-300 ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src="/splash.png" 
                  alt="EchoReads Logo" 
                  className="w-8 h-8 object-contain rounded-lg"
                />
                <h2 className={`font-bold text-lg transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  Menu
                </h2>
              </div>
              <button
                onClick={closeMobileMenu}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  theme === 'dark' 
                    ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800' 
                    : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="h-[calc(100vh-80px)] overflow-y-auto p-6 space-y-4">
            {/* Layer 1: Main Navigation */}
            <div className="space-y-2">
              <h3 className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
              }`}>
                Main Navigation
              </h3>
              {[
                { name: 'Home', path: '/', icon: '🏠' },
                { name: 'Magazines', path: '/magazines', icon: '📰' },
                { name: 'Articles', path: '/articles', icon: '📄' },
                { name: 'Digests', path: '/digests', icon: '📋' },
                { name: 'Pricing', path: '/pricing', icon: '💰' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                    theme === 'dark' 
                      ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800' 
                      : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                  <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Layer 2: App Download */}
            <div className="space-y-2 pt-4">
              <h3 className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
              }`}>
                Get The App
              </h3>
              <Link
                to="/download"
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group bg-accent-gold text-button-text hover:bg-yellow-400`}
              >
                <span className="text-lg">📱</span>
                <span className="font-medium">Download App</span>
                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>

            {/* Layer 3: Authentication */}
            <div className="space-y-2 pt-4">
              <h3 className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
              }`}>
                Account
              </h3>
              {isAuthenticated ? (
                <MobileUserProfile />
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-primary-text hover:text-highlight-text'
                        : 'bg-gray-100 text-light-primary-text hover:text-light-highlight-text'
                    }`}
                  >
                    <span className="text-lg">🔑</span>
                    <span className="font-medium">Login</span>
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg transition-all duration-200 bg-accent-gold text-button-text hover:bg-yellow-400`}
                  >
                    <span className="text-lg">📝</span>
                    <span className="font-medium">Sign Up</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Layer 4: Theme Toggle */}
            <div className="space-y-2 pt-4">
              <h3 className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
              }`}>
                Theme
              </h3>
              <button
                onClick={toggleTheme}
                className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-primary-text hover:text-highlight-text' 
                    : 'bg-gray-100 text-light-primary-text hover:text-light-highlight-text'
                }`}
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
                <span className="text-sm font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </nav>

          {/* Menu Footer */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 border-t transition-colors duration-300 ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <p className={`text-xs text-center transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              EchoReads v1.0.0
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
