'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const TermsClient: React.FC = () => {
  const { theme } = useTheme();
  useScrollToTop();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      {/* Enhanced Header */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-section-background via-section-background to-gray-900' 
          : 'bg-gradient-to-br from-light-section-background via-light-section-background to-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
              theme === 'dark' ? 'bg-accent-gold/20' : 'bg-accent-gold/10'
            }`}>
              <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              theme === 'dark' 
                ? 'from-highlight-text to-accent-gold bg-clip-text text-transparent' 
                : 'from-light-highlight-text to-accent-gold bg-clip-text text-transparent'
            }`}>
              Terms of Service
            </h1>
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className={`prose prose-lg max-w-none ${
            theme === 'dark' 
              ? 'prose-invert prose-headings:text-highlight-text prose-p:text-primary-text' 
              : 'prose-headings:text-light-highlight-text prose-p:text-light-primary-text'
          }`}>
            <p className={`text-lg mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Please read these Terms of Service carefully before using EchoReads. By accessing or using our service, you agree to be bound by these terms.
            </p>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Acceptance of Terms
            </h2>
            <p className={`mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              By accessing and using EchoReads, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Use License
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Permission is granted to temporarily access the materials on EchoReads for personal, non-commercial transitory viewing only.
            </p>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              User Accounts
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Subscription and Payment
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Subscription fees are billed in advance on a monthly, semi-annual, or annual basis. All fees are non-refundable except as required by law.
            </p>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Intellectual Property
            </h2>
            <p className={`mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              The content on EchoReads, including text, graphics, logos, and software, is the property of EchoReads or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Limitation of Liability
            </h2>
            <p className={`mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              In no event shall EchoReads or its suppliers be liable for any damages arising out of the use or inability to use the materials on EchoReads.
            </p>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Contact Information
            </h2>
            <p className={`mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:info@echoreads.online" className="text-accent-gold hover:underline">
                info@echoreads.online
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsClient;

