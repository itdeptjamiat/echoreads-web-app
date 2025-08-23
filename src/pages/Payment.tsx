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
      name: 'EchoPro',
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
      name: 'EchoProPlus',
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {plans.map((plan) => (
                              <div
                  key={plan.id}
                  className={`relative p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedPlan === plan.id
                    ? theme === 'dark'
                      ? 'border-accent-gold bg-gray-800'
                      : 'border-accent-gold bg-gray-50'
                    : theme === 'dark'
                      ? 'border-gray-600 bg-section-background hover:border-gray-500'
                      : 'border-gray-300 bg-light-section-background hover:border-gray-400'
                }`}
                onClick={() => handlePlanSelect(plan.id as 'pro' | 'proplus')}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-gold text-button-text px-4 py-2 rounded-full text-sm font-semibold">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className={`text-3xl font-bold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg transition-colors duration-300 ${
                      theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                    }`}>
                      /{plan.period}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className={`text-sm line-through transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {plan.originalPrice}
                    </span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {plan.discount}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    ✅ What's included:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className={`text-sm transition-colors duration-300 ${
                        theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                      }`}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <>
                      <h4 className={`font-semibold mb-3 mt-6 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                      }`}>
                        ❌ Limitations:
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className={`text-sm transition-colors duration-300 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Selection Indicator */}
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === plan.id
                    ? 'border-accent-gold bg-accent-gold'
                    : theme === 'dark'
                      ? 'border-gray-500'
                      : 'border-gray-400'
                }`}>
                  {selectedPlan === plan.id && (
                    <div className="w-2 h-2 rounded-full bg-button-text"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-12 text-center space-y-4">
            <button
              onClick={handleSubscribe}
              disabled={isProcessing}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : theme === 'dark'
                    ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                    : 'bg-accent-gold text-button-text hover:bg-yellow-400'
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                `Subscribe to ${plans.find(p => p.id === selectedPlan)?.name}`
              )}
            </button>
            
            <button
              onClick={handleCancel}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                theme === 'dark'
                  ? 'text-primary-text hover:text-highlight-text'
                  : 'text-light-primary-text hover:text-light-highlight-text'
              }`}
            >
              Cancel
            </button>
          </div>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <p className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              🔒 Your payment information is secure and encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
