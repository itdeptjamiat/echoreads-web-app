'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-section-background border-t border-gray-800' 
        : 'bg-light-section-background border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/splash.png" 
                alt="EchoReads Logo" 
                width={48}
                height={48}
                className="object-contain rounded-lg"
              />
              <div>
                <h3 className={`font-bold text-2xl transition-colors duration-300 ${
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
            <p className={`text-sm leading-relaxed mb-6 max-w-md transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Discover the world&apos;s best magazines, articles, and digests in one beautiful app. 
              Read anywhere, anytime with our seamless reading experience.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com/echoreads" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'text-primary-text hover:text-accent-gold hover:bg-gray-800' 
                    : 'text-light-primary-text hover:text-accent-gold hover:bg-gray-100'
                }`}
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/echoreads" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'text-primary-text hover:text-accent-gold hover:bg-gray-800' 
                    : 'text-light-primary-text hover:text-accent-gold hover:bg-gray-100'
                }`}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/echoreads" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'text-primary-text hover:text-accent-gold hover:bg-gray-800' 
                    : 'text-light-primary-text hover:text-accent-gold hover:bg-gray-100'
                }`}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold text-base mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Library', path: '/library' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Download App', path: '/download' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className={`text-sm transition-colors duration-200 hover:text-accent-gold ${
                      theme === 'dark' 
                        ? 'text-primary-text' 
                        : 'text-light-primary-text'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className={`font-semibold text-base mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Use', path: '/terms' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className={`text-sm transition-colors duration-200 hover:text-accent-gold ${
                      theme === 'dark' 
                        ? 'text-primary-text' 
                        : 'text-light-primary-text'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 mt-8 border-t transition-colors duration-300 ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              © {new Date().getFullYear()} EchoReads. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                href="/privacy" 
                className={`text-sm transition-colors duration-200 hover:text-accent-gold ${
                  theme === 'dark' 
                    ? 'text-primary-text' 
                    : 'text-light-primary-text'
                }`}
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className={`text-sm transition-colors duration-200 hover:text-accent-gold ${
                  theme === 'dark' 
                    ? 'text-primary-text' 
                    : 'text-light-primary-text'
                }`}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
