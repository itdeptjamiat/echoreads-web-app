import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleBuyPlan = (planName: string) => {
    if (isAuthenticated) {
      // If user is logged in, redirect to payment page
      navigate('/payment', { state: { plan: planName } });
    } else {
      // If user is not logged in, redirect to login page
      navigate('/login', { state: { redirectTo: '/payment', plan: planName } });
    }
  };

  const pricingPlans = [
    {
      name: 'Echo Plus',
      price: '$5',
      period: 'per month',
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
      price: '$10',
      period: 'per month',
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
          <div className="flex justify-center">
            <div className={`inline-flex items-center p-1 rounded-full transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800' 
                : 'bg-gray-200'
            }`}>
              <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-accent-gold text-button-text' 
                  : 'bg-accent-gold text-button-text'
              }`}>
                Monthly
              </span>
              <span className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'text-primary-text' 
                  : 'text-light-primary-text'
              }`}>
                Yearly (Save 20%)
              </span>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? `ring-2 ring-accent-gold ${
                        theme === 'dark' 
                          ? 'bg-section-background border border-gray-700' 
                          : 'bg-white border border-gray-200'
                      }`
                    : `${
                        theme === 'dark' 
                          ? 'bg-section-background border border-gray-800' 
                          : 'bg-white border border-gray-200'
                      }`
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-accent-gold text-button-text">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Icon */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{plan.icon}</div>
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ml-2 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      /{plan.period}
                    </span>
                  </div>
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
                  onClick={() => handleBuyPlan(plan.name)}
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                      : theme === 'dark'
                        ? 'bg-gray-800 text-primary-text hover:bg-gray-700 border border-gray-600'
                        : 'bg-gray-100 text-light-primary-text hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  Buy {plan.name}
                </button>
              </div>
            ))}
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
          
          <div className="space-y-6">
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
                answer: "Echo Plus ($5/month) includes premium content and basic features. Echo Pro ($10/month) adds exclusive content, priority support, analytics, and family sharing for up to 3 users."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 transition-colors duration-300 ${
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

      {/* CTA Section */}
      <section className={`py-20 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary-background' 
          : 'bg-light-primary-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
          <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Ready to Start Reading?
          </h2>
          <p className={`text-xl mb-8 transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Join thousands of readers who have already upgraded their reading experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleBuyPlan('Echo Plus')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 bg-accent-gold text-button-text hover:bg-yellow-400`}
            >
              Start Echo Plus
            </button>
            <button
              onClick={() => handleBuyPlan('Echo Pro')}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-primary-text hover:bg-gray-700 border border-gray-600'
                  : 'bg-white text-light-primary-text hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Start Echo Pro
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
