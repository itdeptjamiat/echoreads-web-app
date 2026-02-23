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

            {/* Download App - App Store & Google Play */}
            <div className="mt-6">
              <p className={`text-xs font-medium mb-3 uppercase tracking-wider transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text/80' : 'text-light-primary-text/80'
              }`}>
                Download the app
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://apps.apple.com/app/echoreads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-800/50 hover:bg-gray-800 text-primary-text'
                      : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-800'
                  }`}
                  aria-label="Download on the App Store"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-sm font-medium">App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.echoreads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-gray-600 bg-gray-800/50 hover:bg-gray-800 text-primary-text'
                      : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-800'
                  }`}
                  aria-label="Get it on Google Play"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden>
                    <path fill="currentColor" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.674 6.21 8.372-8.512zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634zm13.126 6.012l3.665-2.12a1 1 0 010 1.73l-3.665 2.12-2.302-2.302 2.302-2.302z"/>
                  </svg>
                  <span className="text-sm font-medium">Google Play</span>
                </a>
              </div>
            </div>

            {/* Support - WhatsApp */}
            <div className="mt-6">
              <p className={`text-xs font-medium mb-2 uppercase tracking-wider transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text/80' : 'text-light-primary-text/80'
              }`}>
                Support
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/923328001541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    theme === 'dark'
                      ? 'text-green-400 hover:bg-gray-800'
                      : 'text-green-600 hover:bg-gray-100'
                  }`}
                  aria-label="WhatsApp Support"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  +923328001541 (Muhammad Iqbal)
                </a>
                <Link
                  href="/support"
                  className={`text-sm transition-colors duration-200 hover:text-accent-gold ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}
                >
                  Support page
                </Link>
              </div>
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
                { name: 'Download App', path: '/download' },
                { name: 'Support', path: '/support' }
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
