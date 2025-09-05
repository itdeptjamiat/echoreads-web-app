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
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
    country: '',
    zipCode: ''
  });
  useScrollToTop();

  // Get selected plan from location state
  const selectedPlan = location.state?.plan || 'Echo Plus';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // In a real app, you would integrate with a payment processor here
      alert(`Payment successful! Welcome to ${selectedPlan}!`);
      navigate('/');
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/pricing');
  };

  const getPlanDetails = (planName: string) => {
    switch (planName) {
      case 'Echo Plus':
        return { price: '$5', period: 'per month' };
      case 'Echo Pro':
        return { price: '$10', period: 'per month' };
      default:
        return { price: '$5', period: 'per month' };
    }
  };

  const planDetails = getPlanDetails(selectedPlan);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
      {/* Header */}
      <div className={`py-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-section-background' : 'bg-light-section-background'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center">
            <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Complete Your Purchase
            </h1>
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Secure payment for {selectedPlan}
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

      {/* Payment Form */}
      <div className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Plan Summary */}
          <div className={`mb-8 p-6 rounded-xl border-2 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-section-background border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Order Summary
            </h2>
            <div className="flex justify-between items-center">
              <div>
                <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                }`}>
                  {selectedPlan}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  {planDetails.period}
                </p>
              </div>
              <div className={`text-2xl font-bold transition-colors duration-300 ${
                theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
              }`}>
                {planDetails.price}
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className={`p-8 rounded-xl border-2 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-section-background border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
            }`}>
              Payment Information
            </h2>

            {/* Card Number */}
            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-background border-gray-700 text-primary-text placeholder-gray-400'
                    : 'bg-white border-gray-300 text-light-primary-text placeholder-gray-500'
                }`}
                required
              />
            </div>

            {/* Card Holder Name */}
            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Card Holder Name
              </label>
              <input
                type="text"
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-background border-gray-700 text-primary-text placeholder-gray-400'
                    : 'bg-white border-gray-300 text-light-primary-text placeholder-gray-500'
                }`}
                required
              />
            </div>

            {/* Expiry Date and CVV */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-primary-background border-gray-700 text-primary-text placeholder-gray-400'
                      : 'bg-white border-gray-300 text-light-primary-text placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-primary-background border-gray-700 text-primary-text placeholder-gray-400'
                      : 'bg-white border-gray-300 text-light-primary-text placeholder-gray-500'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Country and Zip Code */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-primary-background border-gray-700 text-primary-text'
                      : 'bg-white border-gray-300 text-light-primary-text'
                  }`}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="IN">India</option>
                  <option value="BR">Brazil</option>
                  <option value="MX">Mexico</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                }`}>
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="12345"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'bg-primary-background border-gray-700 text-primary-text placeholder-gray-400'
                      : 'bg-white border-gray-300 text-light-primary-text placeholder-gray-500'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isProcessing}
                className={`flex-1 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : theme === 'dark'
                      ? 'bg-accent-gold text-button-text hover:bg-yellow-400'
                      : 'bg-accent-gold text-button-text hover:bg-yellow-400'
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
                    Pay {planDetails.price}
                  </span>
                )}
              </button>
              
              <button
                type="button"
                onClick={handleCancel}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  theme === 'dark'
                    ? 'border-2 border-gray-600 text-primary-text hover:bg-gray-800'
                    : 'border-2 border-gray-300 text-light-primary-text hover:bg-gray-100'
                }`}
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Security Notice */}
          <div className="mt-8 text-center">
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
