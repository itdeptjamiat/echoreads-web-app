'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useRouter } from 'next/navigation';
import {
  REGIONAL_PRICES,
  getRegionalPriceByCode,
  getDefaultRegionCode,
  type PeriodKey,
} from '@/lib/regionalPricing';

const PERIOD_LABELS: Record<PeriodKey, string> = {
  monthly: 'Monthly',
  sixMonth: '6 Months',
  yearly: 'Yearly',
};

const PERIOD_KEYS: PeriodKey[] = ['monthly', 'sixMonth', 'yearly'];

const PricingClient: React.FC = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('US');
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>('monthly');
  const [pricesSidebarOpen, setPricesSidebarOpen] = useState(false);

  // Default to user's location on pricing screen only (client-side)
  useEffect(() => {
    setSelectedCountryCode(getDefaultRegionCode());
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        const code = data.country_code as string;
        if (code && getRegionalPriceByCode(code)) {
          setSelectedCountryCode(code);
        }
      })
      .catch(() => {});
  }, []);

  const handleBuyPlan = (planName: string, period: PeriodKey) => {
    const periodParam = period === 'sixMonth' ? 'sixmonth' : period;
    const plan = `${planName.replace(' ', '-').toLowerCase()}-${periodParam}`;
    router.push(`/payment?plan=${encodeURIComponent(plan)}`);
  };

  const regional = getRegionalPriceByCode(selectedCountryCode) ?? REGIONAL_PRICES[0];
  const currency = regional.currency;

  const getPrice = useCallback(
    (tier: 'plus' | 'pro', period: PeriodKey) => {
      const raw = regional[tier][period];
      return { price: raw, currency, period: PERIOD_LABELS[period] };
    },
    [regional, currency]
  );

  const plans = [
    {
      name: 'Echo Plus',
      tier: 'plus' as const,
      description: 'Perfect for casual readers',
      features: [
        'Access to all free content',
        'Premium magazines & articles',
        'Unlimited downloads',
        'Offline reading',
        'Ad-free experience',
        'Standard support',
      ],
      popular: false,
      icon: '⭐',
    },
    {
      name: 'Echo Pro',
      tier: 'pro' as const,
      description: 'Best for avid readers',
      features: [
        'Everything in Echo Plus',
        'Exclusive premium content',
        'Priority support',
        'Early access to new features',
        'Advanced reading analytics',
        'Custom reading lists',
        'Family sharing (up to 3 users)',
      ],
      popular: true,
      icon: '👑',
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
      }`}
    >
      {/* Hero Section */}
      <section
        className={`py-20 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}
          >
            Choose Your Reading Plan
          </h1>
          <p
            className={`text-xl mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}
          >
            Unlock unlimited access to premium content and enhance your reading experience
          </p>

          {/* Note: Live prices on mobile app */}
          <div
            className={`mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm ${
              theme === 'dark'
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}
          >
            <span aria-hidden>📱</span>
            <span>For live prices and subscriptions, visit the EchoReads mobile app (App Store or Play Store).</span>
          </div>

          {/* Period Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <div
              className={`inline-flex flex-wrap items-center justify-center gap-1 p-1 rounded-full transition-colors duration-300 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              }`}
            >
              {PERIOD_KEYS.map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 sm:px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedPeriod === period
                      ? 'bg-accent-gold text-button-text shadow-lg'
                      : theme === 'dark'
                        ? 'text-primary-text hover:bg-gray-700'
                        : 'text-light-primary-text hover:bg-gray-300'
                  }`}
                >
                  {PERIOD_LABELS[period]}
                  {period === 'sixMonth' ? (
                    <span className="ml-1 text-xs opacity-90">(10% off)</span>
                  ) : period === 'yearly' ? (
                    <span className="ml-1 text-xs opacity-90">(17% off)</span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          {/* Country selector + View all prices */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800/80 border-gray-700 text-primary-text'
                  : 'bg-white border-gray-200 text-light-primary-text'
              }`}
            >
              <span className="text-lg" aria-hidden>📍</span>
              <label htmlFor="country-select" className="sr-only">
                Select country for pricing
              </label>
              <select
                id="country-select"
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                className={`bg-transparent border-none outline-none cursor-pointer text-sm font-medium ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}
              >
                {REGIONAL_PRICES.map((r) => (
                  <option key={r.code} value={r.code}>
                    {r.name} ({r.currency})
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={() => setPricesSidebarOpen(true)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-700 text-primary-text hover:bg-gray-600 border border-gray-600'
                  : 'bg-gray-100 text-light-primary-text hover:bg-gray-200 border border-gray-300'
              }`}
            >
              <span aria-hidden>📋</span>
              View all regional prices
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section
        className={`py-20 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const price = getPrice(plan.tier, selectedPeriod);
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                    plan.popular
                      ? `ring-2 ring-accent-gold ${
                          theme === 'dark'
                            ? 'bg-gradient-to-br from-section-background to-gray-900 border border-gray-700'
                            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
                        }`
                      : `${
                          theme === 'dark'
                            ? 'bg-gradient-to-br from-section-background to-gray-900 border border-gray-800'
                            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
                        }`
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-accent-gold text-button-text shadow-lg">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}

                  {selectedPeriod !== 'sixMonth' && (
                    <div className="absolute top-4 right-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          theme === 'dark'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-green-100 text-green-700 border border-green-300'
                        }`}
                      >
                        Save 17%
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{plan.icon}</div>
                    <h2
                      className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                      }`}
                    >
                      {plan.name}
                    </h2>
                    <p
                      className={`transition-colors duration-300 ${
                        theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center flex-wrap gap-1">
                      <span
                        className={`text-5xl font-bold transition-colors duration-300 ${
                          theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                        }`}
                      >
                        {currency} {price.price}
                      </span>
                      <span
                        className={`text-lg ml-2 transition-colors duration-300 ${
                          theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                        }`}
                      >
                        /{price.period.toLowerCase()}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-accent-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          className={
                            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBuyPlan(plan.name, selectedPeriod)}
                    className={`block w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                      plan.popular
                        ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                        : theme === 'dark'
                          ? 'bg-gray-800 text-primary-text hover:bg-gray-700 border border-gray-600'
                          : 'bg-gray-100 text-light-primary-text hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    Get {plan.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`py-20 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: 'Can I cancel my subscription anytime?',
                answer:
                  'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.',
              },
              {
                question: 'What payment methods do you accept?',
                answer:
                  'We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely via the mobile app.',
              },
              {
                question: 'Is there a free trial available?',
                answer:
                  'Yes! We offer a 7-day free trial for both Echo Plus and Echo Pro plans. Download the app to start your trial.',
              },
              {
                question: 'Where do I subscribe?',
                answer:
                  'Subscriptions are available in the EchoReads mobile app (iOS and Android). For exact prices in your region, open the app or use "View all regional prices" on this page.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-background border border-gray-800'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}
                >
                  {faq.question}
                </h3>
                <p
                  className={
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right sidebar: All regional prices (table) */}
      {pricesSidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
            aria-hidden
            onClick={() => setPricesSidebarOpen(false)}
          />
          <aside
            className={`fixed top-0 right-0 z-50 h-full w-full max-w-4xl overflow-hidden flex flex-col shadow-2xl transition-transform duration-300 ${
              theme === 'dark' ? 'bg-section-background' : 'bg-white'
            }`}
            aria-label="Regional prices table"
          >
            <div
              className={`flex items-center justify-between px-6 py-4 border-b ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <h2
                className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}
              >
                Regional prices (reference)
              </h2>
              <button
                type="button"
                onClick={() => setPricesSidebarOpen(false)}
                className={`p-2 rounded-xl transition-colors ${
                  theme === 'dark'
                    ? 'text-primary-text hover:bg-gray-700'
                    : 'text-light-primary-text hover:bg-gray-100'
                }`}
                aria-label="Close regional prices"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <div className="p-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse min-w-[800px]">
                  <thead>
                    <tr
                      className={
                        theme === 'dark'
                          ? 'bg-gray-800/80 text-primary-text sticky top-0'
                          : 'bg-gray-100 text-light-primary-text sticky top-0'
                      }
                    >
                      <th className="text-left py-3 px-3 font-semibold rounded-tl-xl">Country</th>
                      <th className="text-left py-3 px-3 font-semibold">Currency</th>
                      <th className="text-right py-3 px-3 font-semibold">Echo Plus (Monthly)</th>
                      <th className="text-right py-3 px-3 font-semibold">Echo Plus (6 mo)</th>
                      <th className="text-right py-3 px-3 font-semibold">Echo Plus (Yearly)</th>
                      <th className="text-right py-3 px-3 font-semibold">Echo Pro (Monthly)</th>
                      <th className="text-right py-3 px-3 font-semibold">Echo Pro (6 mo)</th>
                      <th className="text-right py-3 px-3 font-semibold rounded-tr-xl">Echo Pro (Yearly)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REGIONAL_PRICES.map((r, i) => (
                      <tr
                        key={r.code}
                        className={
                          theme === 'dark'
                            ? (i % 2 === 0 ? 'bg-gray-900/50' : 'bg-section-background')
                            : (i % 2 === 0 ? 'bg-gray-50' : 'bg-white')
                        }
                      >
                        <td className="py-2.5 px-3 font-medium">{r.name}</td>
                        <td className="py-2.5 px-3">{r.currency}</td>
                        <td className="py-2.5 px-3 text-right">{r.plus.monthly}</td>
                        <td className="py-2.5 px-3 text-right">{r.plus.sixMonth}</td>
                        <td className="py-2.5 px-3 text-right">{r.plus.yearly}</td>
                        <td className="py-2.5 px-3 text-right">{r.pro.monthly}</td>
                        <td className="py-2.5 px-3 text-right">{r.pro.sixMonth}</td>
                        <td className="py-2.5 px-3 text-right">{r.pro.yearly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p
              className={`px-6 py-3 text-xs border-t ${
                theme === 'dark' ? 'border-gray-700 text-primary-text' : 'border-gray-200 text-gray-600'
              }`}
            >
              For live prices and purchase, use the EchoReads mobile app (App Store or Play Store).
            </p>
          </aside>
        </>
      )}
    </div>
  );
};

export default PricingClient;
