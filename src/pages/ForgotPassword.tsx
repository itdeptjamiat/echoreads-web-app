import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ForgotPassword: React.FC = () => {
  const { theme } = useTheme();
  const { resetPassword, isLoading } = useAuth();
  const [step, setStep] = useState<'email' | 'otp'>('email');
  useScrollToTop();
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.email) {
      setError('Please enter your email address');
      return;
    }

    try {
      // For now, we'll simulate sending OTP
      // In a real implementation, you'd call an API to send OTP
      setSuccess('OTP has been sent to your email address');
      setStep('otp');
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    }
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!formData.otp || !formData.newPassword || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const resetData = {
        email: formData.email,
        otp: formData.otp,
        newPassword: formData.newPassword
      };
      
      const result = await resetPassword(resetData);
      
      if (result.success) {
        setSuccess('Password reset successfully! You can now login with your new password.');
        setTimeout(() => {
          // Redirect to login page after 2 seconds
          window.location.href = '/login';
        }, 2000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Password reset failed. Please try again.');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
              <div className="max-w-lg w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="text-6xl mb-4">🔐</div>
          <h2 className={`text-3xl font-bold transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Reset Password
          </h2>
          <p className={`mt-2 text-sm transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            {step === 'email' 
              ? 'Enter your email to receive a reset code' 
              : 'Enter the OTP and your new password'
            }
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
            {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* Email Step */}
        {step === 'email' && (
          <form className="mt-8 space-y-6" onSubmit={handleEmailSubmit}>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-background text-primary-text border-gray-600'
                    : 'bg-white text-light-primary-text border-gray-300'
                }`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg transition-all duration-200 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-accent-gold text-button-text hover:bg-yellow-400 transform hover:scale-105'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending OTP...
                  </div>
                ) : (
                  'Send Reset Code'
                )}
              </button>
            </div>
          </form>
        )}

        {/* OTP Step */}
        {step === 'otp' && (
          <form className="mt-8 space-y-6" onSubmit={handleResetSubmit}>
            <div>
              <label htmlFor="otp" className={`block text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                OTP Code
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                required
                value={formData.otp}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-background text-primary-text border-gray-600'
                    : 'bg-white text-light-primary-text border-gray-300'
                }`}
                placeholder="Enter the OTP code"
              />
            </div>

            <div>
              <label htmlFor="newPassword" className={`block text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.newPassword}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-background text-primary-text border-gray-600'
                    : 'bg-white text-light-primary-text border-gray-300'
                }`}
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className={`block text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-background text-primary-text border-gray-600'
                    : 'bg-white text-light-primary-text border-gray-300'
                }`}
                placeholder="Confirm new password"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg transition-all duration-200 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-accent-gold text-button-text hover:bg-yellow-400 transform hover:scale-105'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Resetting Password...
                  </div>
                ) : (
                  'Reset Password'
                )}
              </button>
            </div>
          </form>
        )}

        {/* Links */}
        <div className="text-center space-y-2">
          <Link
            to="/login"
            className={`text-sm transition-colors duration-300 hover:text-accent-gold ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}
          >
            ← Back to Login
          </Link>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            to="/"
            className={`text-sm transition-colors duration-300 hover:text-accent-gold ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
