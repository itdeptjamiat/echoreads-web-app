import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

const MobileUserProfile: React.FC = () => {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="space-y-2">
      {/* User Info */}
      <div className={`p-3 rounded-lg transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
      }`}>
        <div className={`text-sm font-medium transition-colors duration-300 ${
          theme === 'dark' ? 'text-highlight-text' : 'text-light-highlight-text'
        }`}>
          Welcome, {user.name}
        </div>
        <div className={`text-xs transition-colors duration-300 ${
          theme === 'dark' ? 'text-primary-text' : 'text-light-primary-text'
        }`}>
          {user.email}
        </div>
      </div>

      {/* Subscription Button */}
      <button
        onClick={() => navigate('/pricing')}
        className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-gray-800 text-primary-text hover:text-highlight-text'
            : 'bg-gray-100 text-light-primary-text hover:text-light-highlight-text'
        }`}
      >
        <span className="text-lg">💳</span>
        <span className="font-medium">Subscription</span>
      </button>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg transition-all duration-200 bg-red-600 text-white hover:bg-red-700`}
      >
        <span className="text-lg">🚪</span>
        <span className="font-medium">Logout</span>
      </button>
    </div>
  );
};

export default MobileUserProfile;
