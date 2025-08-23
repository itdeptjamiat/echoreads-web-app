import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Payment: React.FC = () => {
  const { theme } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState<'pro' | 'proplus'>('pro');
  const [isProcessing, setIsProcessing] = useState(false);
  useScrollToTop();

  // Get return URL from location state
  const returnUrl = location.state?.returnUrl || '/';

  const plans = [
    {
      id: 'pro',
      name: 'Echo Plus',
      price: '$5',
      period: 'month',
      originalPrice: '$10',
      discount: '50% OFF',
      features: [
        '📖 Read 50 Magazines per month',
        '📄 Read 50 Articles per month',
        '📋 Read 50 Digests per month',
        '📱 Access on 2 devices',
        '🔖 Bookmark unlimited content',
        '📊 Reading progress tracking',
        '🌙 Dark/Light theme support',
        '📧 Email support'
      ],
      limitations: [
        '❌ No offline reading',
        '❌ Limited app features',
        '❌ No priority support'
      ]
    },
    {
      id: 'proplus',
      name: 'Echo Pro',
      price: '$10',
      period: 'month',
      originalPrice: '$20',
      discount: '50% OFF',
      features: [
        '📖 Unlimited Magazines',
        '📄 Unlimited Articles',
        '📋 Unlimited Digests',
        '📱 Read on mobile app',
        '📱 Access on unlimited devices',
        '🔖 Bookmark unlimited content',
        '📊 Advanced reading analytics',
        '🌙 Dark/Light theme support',
        '📧 Priority email support',
        '📞 Phone support',
        '📚 Read offline in app',
        '🎯 Personalized recommendations',
        '📈 Reading insights & reports',
        '🔒 Family sharing (up to 5 members)',
        '🎨 Premium themes & customization',
        '📱 Early access to new features'
      ],
      limitations: [],
      popular: true
    }
  ];

  const handlePlanSelect = (planId: 'pro' | 'proplus') => {
    setSelectedPlan(planId);
  };

  const handleSubscribe = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // In a real app, you would integrate with a payment processor here
      // For now, we'll just redirect
      navigate(returnUrl);
    }, 2000);
  };

  const handleCancel = () => {
    navigate(returnUrl);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      {/* Header */}
      <div className={`py-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Choose Your Plan
            </h1>
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Unlock unlimited access to premium content
            </p>
            {user && (
              <p className={`text-sm mt-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Welcome back, {user.name}! 👋
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative group overflow-hidden rounded-3xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl ${
                  selectedPlan === plan.id
                    ? theme === 'dark'
                      ? 'border-accent-gold bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl shadow-accent-gold/20'
                      : 'border-accent-gold bg-gradient-to-br from-gray-50 to-white shadow-2xl shadow-accent-gold/20'
                    : theme === 'dark'
                      ? 'border-gray-600 bg-gradient-to-br from-section-background to-gray-800 hover:border-accent-gold/50 hover:shadow-xl'
                      : 'border-gray-200 bg-gradient-to-br from-light-section-background to-white hover:border-accent-gold/50 hover:shadow-xl'
                }`}
                onClick={() => handlePlanSelect(plan.id as 'pro' | 'proplus')}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 opacity-5 transition-opacity duration-300 ${
                  selectedPlan === plan.id ? 'opacity-10' : 'opacity-5'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-gold/10 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <span className="bg-gradient-to-r from-accent-gold to-yellow-400 text-button-text px-6 py-3 rounded-full text-sm font-bold shadow-lg transform hover:scale-105 transition-transform duration-200">
                        ⭐ MOST POPULAR
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-yellow-400 rounded-full blur-lg opacity-50"></div>
                    </div>
                  </div>
                )}

                {/* Plan Content */}
                <div className="relative z-10 p-8 lg:p-10">
                  {/* Plan Header */}
                  <div className="text-center mb-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? 'bg-accent-gold shadow-lg shadow-accent-gold/30'
                        : theme === 'dark'
                          ? 'bg-gray-700'
                          : 'bg-gray-100'
                    }`}>
                      <span className="text-2xl">
                        {plan.id === 'pro' ? '📚' : '🚀'}
                      </span>
                    </div>
                    
                    <h3 className={`text-3xl font-bold mb-3 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-center justify-center space-x-1 mb-3">
                      <span className={`text-4xl font-bold transition-colors duration-300 ${
                        theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-xl transition-colors duration-300 ${
                        theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                      }`}>
                        /{plan.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-3">
                      <span className={`text-lg line-through transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {plan.originalPrice}
                      </span>
                      <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                        {plan.discount}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-6 mb-10">
                    <h4 className={`font-bold text-lg mb-4 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      ✨ What's included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className={`flex items-start space-x-3 text-sm transition-colors duration-300 ${
                          theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                        }`}>
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className={`font-bold text-lg mb-4 mt-8 transition-colors duration-300 ${
                          theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                        }`}>
                          ⚠️ Limitations:
                        </h4>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, index) => (
                            <li key={index} className={`flex items-start space-x-3 text-sm transition-colors duration-300 ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  {/* Selection Indicator */}
                  <div className="flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? 'border-accent-gold bg-accent-gold shadow-lg shadow-accent-gold/30'
                        : theme === 'dark'
                          ? 'border-gray-500 group-hover:border-accent-gold/50'
                          : 'border-gray-400 group-hover:border-accent-gold/50'
                    }`}>
                      {selectedPlan === plan.id && (
                        <svg className="w-4 h-4 text-button-text" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  selectedPlan === plan.id ? 'opacity-100' : ''
                }`}></div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-16 text-center space-y-6">
            <button
              onClick={handleSubscribe}
              disabled={isProcessing}
              className={`relative px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : theme === 'dark'
                    ? 'bg-gradient-to-r from-accent-gold to-yellow-400 text-button-text hover:from-yellow-400 hover:to-accent-gold shadow-lg shadow-accent-gold/30'
                    : 'bg-gradient-to-r from-accent-gold to-yellow-400 text-button-text hover:from-yellow-400 hover:to-accent-gold shadow-lg shadow-accent-gold/30'
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <span className="mr-2">💳</span>
                  Subscribe to {plans.find(p => p.id === selectedPlan)?.name}
                </span>
              )}
            </button>
            
            <button
              onClick={handleCancel}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 ${
                theme === 'dark'
                  ? 'text-primary-text hover:text-highlight-text hover:bg-gray-800'
                  : 'text-light-primary-text hover:text-light-highlight-text hover:bg-gray-100'
              }`}
            >
              ← Back to Browse
            </button>
          </div>

          {/* Security Notice */}
          <div className="mt-12 text-center">
            <div className={`inline-flex items-center space-x-3 px-6 py-4 rounded-2xl transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border border-gray-700' 
                : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <p className={`font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  Secure Payment
                </p>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
