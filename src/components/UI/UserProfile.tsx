import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

const UserProfile: React.FC = () => {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  // Get initials from user name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative hidden md:block">
      {/* User Avatar Button */}
      <button
        onClick={toggleProfile}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-105 ${
          theme === 'dark' 
            ? 'bg-accent-gold text-button-text hover:bg-yellow-400' 
            : 'bg-accent-gold text-button-text hover:bg-yellow-400'
        }`}
        aria-label="User profile"
      >
        <span className="text-sm font-semibold">
          {getInitials(user.name)}
        </span>
      </button>

      {/* Profile Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg z-50">
          <div className={`rounded-lg border transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-section-background border-gray-700' 
              : 'bg-light-section-background border-gray-300'
          }`}>
            {/* User Info */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-accent-gold text-button-text' 
                    : 'bg-accent-gold text-button-text'
                }`}>
                  <span className="text-lg font-semibold">
                    {getInitials(user.name)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate transition-colors duration-300 ${
                    theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
                  }`}>
                    {user.name}
                  </p>
                  <p className={`text-xs truncate transition-colors duration-300 ${
                    theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
                  }`}>
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Actions */}
            <div className="p-2">
              <button
                onClick={() => {
                  navigate('/pricing');
                  setIsOpen(false);
                }}
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'text-primary-text hover:bg-gray-700 hover:text-highlight-text'
                    : 'text-light-primary-text hover:bg-gray-100 hover:text-light-highlight-text'
                }`}
              >
                <span className="mr-3">💳</span>
                Subscription
              </button>
            </div>

            {/* Logout */}
            <div className="p-2 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleLogout}
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'text-red-400 hover:bg-red-900 hover:text-red-300'
                    : 'text-red-600 hover:bg-red-50 hover:text-red-700'
                }`}
              >
                <span className="mr-3">🚪</span>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;
