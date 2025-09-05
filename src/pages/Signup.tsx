import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Signup: React.FC = () => {
  const { theme } = useTheme();
  const { signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const returnUrl = location.state?.returnUrl || '/';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const signupData = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };
      
      const result = await signup(signupData);
      
      if (result.success) {
        // Redirect to return URL or home
        navigate(returnUrl);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-primary-background' : 'bg-light-primary-background'
    }`}>
              <div className="max-w-lg w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className={`text-3xl font-bold transition-colors duration-300 ${
            theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
          }`}>
            Join EchoReads
          </h2>
          <p className={`mt-2 text-sm transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Create your account to start reading
          </p>
        </div>

        {/* Signup Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-background text-primary-text border-gray-600'
                    : 'bg-white text-light-primary-text border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
            </div>

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
              <label htmlFor="password" className={`block text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-background text-primary-text border-gray-600'
                    : 'bg-white text-light-primary-text border-gray-300'
                }`}
                placeholder="Create a password (min 6 characters)"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className={`block text-sm font-medium transition-colors duration-300 ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}>
                Confirm Password
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
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
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
                  Creating account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          {/* Terms */}
          <div className={`text-center text-xs transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            By creating an account, you agree to our{' '}
            <Link to="/terms" className="text-accent-gold hover:text-yellow-400">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-accent-gold hover:text-yellow-400">
              Privacy Policy
            </Link>
          </div>

          {/* Links */}
          <div className="text-center">
            <div className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Already have an account?{' '}
              <Link
                to="/login"
                state={{ returnUrl }}
                className="font-medium text-accent-gold hover:text-yellow-400"
              >
                Sign in
              </Link>
            </div>
          </div>
        </form>

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

export default Signup;
