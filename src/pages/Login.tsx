import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Login: React.FC = () => {
  const { theme } = useTheme();
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useScrollToTop();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const returnUrl = location.state?.returnUrl || '/';
  const message = location.state?.message || '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const result = await login(formData);
      
      if (result.success) {
        // Redirect to return URL or home
        navigate(returnUrl);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
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
            Welcome Back
          </h2>
          <p className={`mt-2 text-sm transition-colors duration-300 ${
            theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
          }`}>
            Sign in to continue reading
          </p>
          {message && (
            <div className="mt-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
              {message}
            </div>
          )}
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
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
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-background text-primary-text border-gray-600'
                    : 'bg-white text-light-primary-text border-gray-300'
                }`}
                placeholder="Enter your password"
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
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </div>



          {/* Links */}
          <div className="text-center space-y-2">
            <Link
              to="/forgot-password"
              className={`text-sm transition-colors duration-300 hover:text-accent-gold ${
                theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
              }`}
            >
              Forgot your password?
            </Link>
            <div className={`text-sm transition-colors duration-300 ${
              theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
            }`}>
              Don't have an account?{' '}
              <Link
                to="/signup"
                state={{ returnUrl }}
                className="font-medium text-accent-gold hover:text-yellow-400"
              >
                Sign up
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

export default Login;
