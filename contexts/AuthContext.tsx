'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import authService, { User, LoginRequest, SignupRequest, ResetPasswordRequest } from '@/lib/auth';
import { logger } from '@/lib/logger';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<{ success: boolean; message: string }>;
  signup: (userData: SignupRequest) => Promise<{ success: boolean; message: string }>;
  resetPassword: (resetData: ResetPasswordRequest) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize authentication state on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const isAuth = authService.isAuthenticated();
        const currentUser = authService.getCurrentUser();
        
        if (isAuth && currentUser) {
          // Validate token
          const isValid = await authService.validateToken();
          if (isValid) {
            setUser(currentUser);
            setIsAuthenticated(true);
          } else {
            authService.logout();
            setUser(null);
            setIsAuthenticated(false);
          }
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        logger.error('Auth initialization error:', error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials: LoginRequest): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true);
      
      const response = await authService.login(credentials);
      
      if (response.success && response.data?.token) {
        const userData = response.data.user;
        setUser(userData);
        setIsAuthenticated(true);
        return { success: true, message: 'Login successful!' };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      logger.error('Login error:', error);
      return { success: false, message: 'An unexpected error occurred. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: SignupRequest): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true);
      
      const response = await authService.signup(userData);
      
      if (response.success && response.data?.token) {
        const user = response.data.user;
        setUser(user);
        setIsAuthenticated(true);
        return { success: true, message: 'Account created successfully!' };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      logger.error('Signup error:', error);
      return { success: false, message: 'An unexpected error occurred. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (resetData: ResetPasswordRequest): Promise<{ success: boolean; message: string }> => {
    try {
      setIsLoading(true);
      
      const response = await authService.resetPassword(resetData);
      
      if (response.success) {
        return { success: true, message: 'Password reset successfully!' };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      logger.error('Reset password error:', error);
      return { success: false, message: 'An unexpected error occurred. Please try again.' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    resetPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

