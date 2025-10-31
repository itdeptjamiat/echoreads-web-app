import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`border-t transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-section-background border-gray-800' 
        : 'bg-light-section-background border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/splash.png" 
                alt="EchoReads Logo" 
                className="w-10 h-10 object-contain rounded-lg"
              />
              <div>
                <h3 className={`font-bold text-xl transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  EchoReads
                </h3>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  Your Digital Reading Companion
                </p>
              </div>
            </div>
            <p className={`text-sm mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Discover the world's best magazines, articles, and digests in one beautiful app. 
              Read anywhere, anytime with our seamless reading experience.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className={`flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                theme === 'dark'
                  ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                  : 'bg-accent-gold text-button-text hover:bg-yellow-400'
              }`}>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download for iOS
              </button>
              <button className={`flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                theme === 'dark'
                  ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                  : 'bg-accent-gold text-button-text hover:bg-yellow-400'
              }`}>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Download for Android
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold text-lg mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Magazines', path: '/magazines' },
                { name: 'Articles', path: '/articles' },
                { name: 'Digests', path: '/digests' },
                { name: 'Download App', path: '/download' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className={`text-sm transition-colors duration-200 hover:underline ${
                      theme === 'dark' 
                        ? 'text-primary-text hover:text-highlight-text' 
                        : 'text-light-primary-text hover:text-light-highlight-text'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className={`font-semibold text-lg mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Connect With Us
            </h4>
            <div className="space-y-2">
              <a href="https://twitter.com/echoreads" className={`flex items-center text-sm transition-colors duration-200 hover:underline ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text' 
                  : 'text-light-primary-text hover:text-light-highlight-text'
              }`}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </a>
              <a href="https://instagram.com/echoreads" className={`flex items-center text-sm transition-colors duration-200 hover:underline ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text' 
                  : 'text-light-primary-text hover:text-light-highlight-text'
              }`}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
                Instagram
              </a>
              <a href="https://linkedin.com/company/echoreads" className={`flex items-center text-sm transition-colors duration-200 hover:underline ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text' 
                  : 'text-light-primary-text hover:text-light-highlight-text'
              }`}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 pt-8 border-t transition-colors duration-300 ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              © 2024 EchoReads. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className={`text-sm transition-colors duration-200 hover:underline ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text' 
                  : 'text-light-primary-text hover:text-light-highlight-text'
              }`}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={`text-sm transition-colors duration-200 hover:underline ${
                theme === 'dark' 
                  ? 'text-primary-text hover:text-highlight-text' 
                  : 'text-light-primary-text hover:text-light-highlight-text'
              }`}>
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
