'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Link from 'next/link';

const PrivacyClient: React.FC = () => {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              theme === 'dark' 
                ? 'from-highlight-text to-accent-gold bg-clip-text text-transparent' 
                : 'from-light-highlight-text to-accent-gold bg-clip-text text-transparent'
            }`}>
              Privacy Policy
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
              At EchoReads, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital reading platform.
            </p>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Information We Collect
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We collect information that you provide directly to us, including:
            </p>
            <ul className={`list-disc pl-6 mb-6 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Account information (name, email address)</li>
              <li>Reading preferences and history</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Device information and usage data</li>
            </ul>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              How We Use Your Information
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We use the information we collect to:
            </p>
            <ul className={`list-disc pl-6 mb-6 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Data Security
            </h2>
            <p className={`mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Your Rights
            </h2>
            <p className={`mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              You have the right to:
            </p>
            <ul className={`list-disc pl-6 mb-6 space-y-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing</li>
            </ul>

            <h2 className={`text-3xl font-bold mt-8 mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Contact Us
            </h2>
            <p className={`mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
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

export default PrivacyClient;

