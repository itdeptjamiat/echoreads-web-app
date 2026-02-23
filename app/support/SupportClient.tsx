'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const SUPPORT = {
  whatsapp: {
    name: 'Muhammad Iqbal',
    role: 'Project Director',
    number: '+923328001541',
    href: 'https://wa.me/923328001541',
  },
  emails: [
    { label: 'CEO', address: 'ceo@echoreads.online' },
    { label: 'Project Director', address: 'iqbal@echoreads.online' },
  ],
};

const SupportClient: React.FC = () => {
  const { theme } = useTheme();
  useScrollToTop();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-10">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Support
          </h1>
          <p className={`text-base sm:text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Get in touch with our team. We&apos;re here to help.
          </p>
        </div>

        <div className={`rounded-2xl border transition-colors duration-300 ${
          theme === 'dark' ? 'bg-section-background border-gray-800' : 'bg-white border-gray-200'
        }`}>
          {/* WhatsApp - Project Director */}
          <div className={`p-6 sm:p-8 border-b transition-colors duration-300 ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h2 className={`text-lg font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  WhatsApp Support
                </h2>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  {SUPPORT.whatsapp.name} – {SUPPORT.whatsapp.role}
                </p>
              </div>
            </div>
            <a
              href={SUPPORT.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp – {SUPPORT.whatsapp.number}
            </a>
          </div>

          {/* Email contacts */}
          <div className="p-6 sm:p-8">
            <h2 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Email
            </h2>
            <ul className="space-y-4">
              {SUPPORT.emails.map(({ label, address }) => (
                <li key={address} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className={`text-sm transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    {label}:
                  </span>
                  <a
                    href={`mailto:${address}`}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-accent-gold ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}
                  >
                    {address}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/download"
            className={`text-sm font-medium transition-colors duration-200 hover:text-accent-gold ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}
          >
            ← Back to Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportClient;
