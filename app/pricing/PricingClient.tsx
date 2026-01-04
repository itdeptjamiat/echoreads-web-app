'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useRouter } from 'next/navigation';

const PricingClient: React.FC = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [isPakistan, setIsPakistan] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'sixmonth' | 'yearly'>('monthly');

  useEffect(() => {
    // Detect location - simple check (can be enhanced with IP geolocation API)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const language = navigator.language || (navigator as any).userLanguage;
    
    // Check if in Pakistan timezone or language
    if (timezone.includes('Karachi') || timezone.includes('Islamabad') || language.includes('ur') || language.includes('PK')) {
      setIsPakistan(true);
    } else {
      // Try to detect from IP (simplified - in production use a proper geolocation service)
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (data.country_code === 'PK') {
            setIsPakistan(true);
          }
        })
        .catch(() => {
          // Default to international if detection fails
          setIsPakistan(false);
        });
    }
  }, []);

  const handleBuyPlan = (planName: string, period: string) => {
    const plan = `${planName}-${period}`;
    router.push(`/payment?plan=${encodeURIComponent(plan)}`);
  };

  // Pricing structure
  const pricingData = {
    international: {
      plus: {
        monthly: { price: 5, currency: '$', period: 'month' },
        sixmonth: { price: 25, currency: '$', period: '6 months', discount: 17 },
        yearly: { price: 50, currency: '$', period: 'year', discount: 17 }
      },
      pro: {
        monthly: { price: 10, currency: '$', period: 'month' },
        sixmonth: { price: 50, currency: '$', period: '6 months', discount: 17 },
        yearly: { price: 100, currency: '$', period: 'year', discount: 17 }
      }
    },
    pakistan: {
      plus: {
        monthly: { price: 300, currency: 'PKR', period: 'month' },
        sixmonth: { price: 1500, currency: 'PKR', period: '6 months', discount: 17 },
        yearly: { price: 3000, currency: 'PKR', period: 'year', discount: 17 }
      },
      pro: {
        monthly: { price: 500, currency: 'PKR', period: 'month' },
        sixmonth: { price: 2500, currency: 'PKR', period: '6 months', discount: 17 },
        yearly: { price: 5000, currency: 'PKR', period: 'year', discount: 17 }
      }
    }
  };

  const currentPricing = isPakistan ? pricingData.pakistan : pricingData.international;

  const plans = [
    {
      name: 'Echo Plus',
      tier: 'plus',
      description: 'Perfect for casual readers',
      features: [
        'Access to all free content',
        'Premium magazines & articles',
        'Unlimited downloads',
        'Offline reading',
        'Ad-free experience',
        'Standard support'
      ],
      popular: false,
      icon: '⭐'
    },
    {
      name: 'Echo Pro',
      tier: 'pro',
      description: 'Best for avid readers',
      features: [
        'Everything in Echo Plus',
        'Exclusive premium content',
        'Priority support',
        'Early access to new features',
        'Advanced reading analytics',
        'Custom reading lists',
        'Family sharing (up to 3 users)'
      ],
      popular: true,
      icon: '👑'
    }
  ];

  const getPrice = (tier: 'plus' | 'pro', period: 'monthly' | 'sixmonth' | 'yearly') => {
    return currentPricing[tier][period];
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      {/* Hero Section */}
      <section className={`py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background' 
          : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Choose Your Reading Plan
          </h1>
          <p className={`text-xl mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Unlock unlimited access to premium content and enhance your reading experience
          </p>
          
          {/* Period Selector */}
          <div className="flex justify-center mb-8">
            <div className={`inline-flex items-center p-1 rounded-full transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800' 
                : 'bg-gray-200'
            }`}>
              {(['monthly', 'sixmonth', 'yearly'] as const).map((period) => {
                const periodLabels = {
                  monthly: 'Monthly',
                  sixmonth: '6 Months',
                  yearly: 'Yearly'
                };
                const price = getPrice('plus', period);
                const discount = ('discount' in price ? price.discount : 0) || 0;
                
                return (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedPeriod === period
                        ? 'bg-accent-gold text-button-text shadow-lg'
                        : theme === 'dark'
                          ? 'text-primary-text hover:bg-gray-700'
                          : 'text-light-primary-text hover:bg-gray-300'
                    }`}
                  >
                    {periodLabels[period]}
                    {discount > 0 && (
                      <span className="ml-2 text-xs">({discount}% off)</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Location Indicator */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm ${
            theme === 'dark' 
              ? 'bg-gray-800 text-primary-text' 
              : 'bg-gray-100 text-light-primary-text'
          }`}>
            <span className="mr-2">📍</span>
            {isPakistan ? 'Pakistan (PKR)' : 'International (USD)'}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={`py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary-background' 
          : 'bg-light-primary-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const price = getPrice(plan.tier as 'plus' | 'pro', selectedPeriod);
              const monthlyPrice = getPrice(plan.tier as 'plus' | 'pro', 'monthly').price;
              const savings = selectedPeriod !== 'monthly' 
                ? Math.round((monthlyPrice * (selectedPeriod === 'sixmonth' ? 6 : 12) - price.price) / (monthlyPrice * (selectedPeriod === 'sixmonth' ? 6 : 12)) * 100)
                : 0;

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
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-accent-gold text-button-text shadow-lg">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}

                  {/* Discount Badge */}
                  {('discount' in price && price.discount) && (
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        theme === 'dark'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-green-100 text-green-700 border border-green-300'
                      }`}>
                        Save {price.discount}%
                      </span>
                    </div>
                  )}

                  {/* Plan Icon */}
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{plan.icon}</div>
                    <h2 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      {plan.name}
                    </h2>
                    <p className={`transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className={`text-5xl font-bold transition-colors duration-300 ${
                        theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                      }`}>
                        {price.currency}{price.price}
                      </span>
                      <span className={`text-lg ml-2 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                      }`}>
                        /{price.period}
                      </span>
                    </div>
                    {savings > 0 && (
                      <p className={`text-sm mt-2 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-green-400' : 'text-green-600'
                      }`}>
                        Save {savings}% compared to monthly
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                            theme === 'dark' ? 'text-accent-gold' : 'text-accent-gold'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className={`transition-colors duration-300 ${
                          theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
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
      <section className={`py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-section-background' 
          : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <h2 className={`text-3xl font-bold text-center mb-12 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes! We offer a 7-day free trial for both Echo Plus and Echo Pro plans. No credit card required to start your trial."
              },
              {
                question: "Can I switch between plans?",
                answer: "Absolutely! You can upgrade or downgrade between Echo Plus and Echo Pro at any time. Changes take effect immediately."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment."
              },
              {
                question: "What's the difference between Echo Plus and Echo Pro?",
                answer: `Echo Plus (${isPakistan ? '300 PKR' : '$5'}/month) includes premium content and basic features. Echo Pro (${isPakistan ? '500 PKR' : '$10'}/month) adds exclusive content, priority support, analytics, and family sharing for up to 3 users.`
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-primary-background border border-gray-800' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  {faq.question}
                </h3>
                <p className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingClient;

