'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const PaymentClient: React.FC = () => {
  const { theme } = useTheme();
  useScrollToTop();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      {/* Header Section */}
      <div className={`py-8 sm:py-12 lg:py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${
            theme === 'dark' 
              ? 'from-highlight-text via-accent-gold to-highlight-text' 
              : 'from-light-highlight-text via-accent-gold to-light-highlight-text'
          } bg-clip-text text-transparent`}>
            Payment on Web Coming Soon
          </h1>
          <p className={`text-base sm:text-lg lg:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            We&apos;re working hard to bring you a seamless payment experience. 
            Stay tuned for updates on when web payments will be available!
          </p>
        </div>
      </div>

      {/* Realistic Credit Card Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col items-center justify-center">
          {/* Realistic Credit Card - Flat Design with Perfect Alignment */}
          <div className="relative w-full max-w-md mb-12 mx-auto">
            <div className="relative transition-transform duration-300 hover:scale-[1.02] w-full">
              {/* Card Shadow */}
              <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-50 ${
                theme === 'dark' 
                  ? 'bg-accent-gold/30' 
                  : 'bg-accent-gold/20'
              }`} style={{ transform: 'translateY(10px) scale(0.95)' }} />
              
              {/* Main Credit Card - Flat, Perfectly Aligned */}
              <div 
                className={`relative rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden w-full ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700/50'
                    : 'bg-gradient-to-br from-gray-100 via-white to-gray-50 border border-gray-300/50'
                }`}
                style={{ 
                  boxShadow: theme === 'dark'
                    ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(250, 204, 21, 0.1), inset 0 0 60px rgba(0, 0, 0, 0.3)'
                    : '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 40px rgba(250, 204, 21, 0.1), inset 0 0 60px rgba(255, 255, 255, 0.5)'
                }}
              >
                {/* Holographic Shine Effect */}
                <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                  background: 'linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                  transform: 'skewX(-20deg) translateX(-100%)',
                  animation: 'shimmer 3s infinite'
                }} />
                
                {/* Card Network Logo (Visa/Mastercard style) */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-12 h-8 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center border border-white/30">
                    <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-sm flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">VISA</span>
                    </div>
                  </div>
                </div>

                {/* Card Chip - More Realistic */}
                <div className="mb-6 mt-2">
                  <div className="relative w-14 h-11 sm:w-16 sm:h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-md flex items-center justify-center shadow-lg" style={{
                    boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.3), 0 2px 8px rgba(0, 0, 0, 0.3)'
                  }}>
                    {/* Chip Inner Design */}
                    <div className="w-10 h-8 sm:w-12 sm:h-9 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-sm relative overflow-hidden">
                      {/* Chip Lines */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-0.5 bg-black/20 absolute top-1/3" />
                        <div className="w-full h-0.5 bg-black/20 absolute bottom-1/3" />
                        <div className="h-full w-0.5 bg-black/20 absolute left-1/3" />
                        <div className="h-full w-0.5 bg-black/20 absolute right-1/3" />
                      </div>
                      {/* Chip Corner Cut */}
                      <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-yellow-600 to-transparent rounded-tl-sm" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-br from-transparent to-yellow-600 rounded-br-sm" />
                    </div>
                  </div>
                </div>

                {/* Card Number - More Realistic */}
                <div className="mb-6">
                  <div className={`text-[10px] sm:text-xs mb-2 tracking-widest opacity-70 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    CARD NUMBER
                  </div>
                  <div className={`text-xl sm:text-2xl lg:text-3xl font-mono font-bold tracking-[0.2em] ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`} style={{ letterSpacing: '0.15em' }}>
                    <span className="inline-block mx-1">••••</span>
                    <span className="inline-block mx-1">••••</span>
                    <span className="inline-block mx-1">••••</span>
                    <span className="inline-block mx-1">1234</span>
                  </div>
                </div>

                {/* Card Holder & Expiry - More Realistic */}
                <div className="flex justify-between items-end mb-4">
                  <div className="flex-1">
                    <div className={`text-[10px] sm:text-xs mb-1 tracking-widest opacity-70 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      CARD HOLDER
                    </div>
                    <div className={`text-sm sm:text-base font-semibold tracking-wide ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      ECHOREADS
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-[10px] sm:text-xs mb-1 tracking-widest opacity-70 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      EXPIRES
                    </div>
                    <div className={`text-sm sm:text-base font-semibold tracking-wide ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      SOON
                    </div>
                  </div>
                </div>

                {/* Coming Soon Badge - More Prominent */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold text-button-text px-4 py-2 rounded-full shadow-xl relative overflow-hidden" style={{
                    boxShadow: '0 4px 15px rgba(250, 204, 21, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                  }}>
                    {/* Badge Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer" />
                    <span className="text-xs sm:text-sm font-bold relative z-10 tracking-wide">COMING SOON</span>
                  </div>
                </div>

                {/* Decorative Elements - More Realistic */}
                <div className="absolute bottom-4 left-4 opacity-20">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="25" cy="25" r="12" stroke="currentColor" strokeWidth="1" />
                    <circle cx="25" cy="25" r="4" fill="currentColor" />
                  </svg>
                </div>

                {/* Embossed Effect Lines */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 w-full max-w-3xl">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 10h18" />
                    <circle cx="7" cy="15" r="1" fill="currentColor" />
                    <circle cx="11" cy="15" r="1" fill="currentColor" />
                  </svg>
                ),
                title: 'Secure',
                description: 'Bank-level encryption'
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
                title: 'Fast',
                description: 'Instant processing'
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                title: 'Easy',
                description: 'Simple checkout'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-section-background border-gray-800 hover:border-accent-gold/50'
                    : 'bg-white border-gray-200 hover:border-accent-gold/50'
                }`}
              >
                <div className={`flex justify-center mb-4 text-accent-gold`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 text-center transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm sm:text-base text-center transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <Link
              href="/library"
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 bg-accent-gold text-button-text hover:bg-yellow-400 hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              Browse Library
            </Link>
            <Link
              href="/download"
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 border-2 ${
                theme === 'dark'
                  ? 'border-gray-700 text-primary-text hover:bg-gray-800 hover:border-gray-600'
                  : 'border-gray-300 text-light-primary-text hover:bg-gray-100 hover:border-gray-400'
              }`}
            >
              Download App
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-20deg);
          }
          100% {
            transform: translateX(200%) skewX(-20deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default PaymentClient;

