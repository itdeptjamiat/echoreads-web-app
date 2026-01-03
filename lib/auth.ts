import { logger } from './logger';
import { ClientAuth } from './client-auth';

// Direct API URL for server-side calls
const DIRECT_API_URL = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.echoreads.online/api/v1';
const ENABLE_DEMO_MODE = process.env.ENABLE_DEMO_MODE === 'true';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
  email: string;
  otp: string;
  newPassword: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    token: string;
    user: {
      _id: string;
      name: string;
      email: string;
    };
  };
}

export interface User {
  _id: string;
  name: string;
  email: string;
}

class AuthService {
  private baseUrl: string;
  private tokenKey = 'echoreads_auth_token';
  private userKey = 'echoreads_user_data';

  constructor() {
    // Use Next.js API routes on client (to avoid CORS)
    // Server-side: use direct API (but won't be called from server)
    if (typeof window !== 'undefined') {
      this.baseUrl = '/api';  // Client: use Next.js API routes (same origin, no CORS)
    } else {
      this.baseUrl = DIRECT_API_URL;  // Server: use direct API (but won't be called)
    }
  }

  // Login user
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    try {
      logger.info('Auth Service: Attempting login for:', credentials.email);

      // Use Next.js API route on client (to avoid CORS)
      const url = typeof window !== 'undefined' 
        ? '/api/auth/login'  // Client: use Next.js API route
        : `${this.baseUrl}/user/login`;  // Server: use direct API (but won't be called)

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      logger.info('Auth Service: Login response status:', response.status);

      if (!response.ok) {
        if (ENABLE_DEMO_MODE) {
          logger.warn('Auth Service: API returned error status, using demo authentication');
          if (credentials.email && credentials.password) {
            return this.createDemoAuth(credentials.email, credentials.password);
          }
        }
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        return { success: false, message: errorData.message || 'Login failed' };
      }

      const result: AuthResponse = await response.json();
      logger.info('Auth Service: Login response:', result);

      if (result.success && result.data?.token) {
        this.setToken(result.data.token);
        this.setUser(result.data.user);
        logger.info('Auth Service: Login successful, token stored');
      }

      return result;
    } catch (error) {
      logger.error('Auth Service: Login error:', error);
      if (ENABLE_DEMO_MODE && credentials.email && credentials.password) {
        logger.info('Auth Service: Using demo authentication due to API error');
        return this.createDemoAuth(credentials.email, credentials.password);
      }
      return {
        success: false,
        message: (error instanceof Error) ? error.message : 'An unexpected error occurred. Please try again.'
      };
    }
  }

  // Signup user
  async signup(userData: SignupRequest): Promise<AuthResponse> {
    try {
      logger.info('Auth Service: Attempting signup for:', userData.email);

      // Use Next.js API route on client (to avoid CORS)
      const url = typeof window !== 'undefined'
        ? '/api/auth/signup'  // Client: use Next.js API route
        : `${this.baseUrl}/user/signup`;  // Server: use direct API (but won't be called)

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      logger.info('Auth Service: Signup response status:', response.status);

      if (!response.ok) {
        if (ENABLE_DEMO_MODE) {
          logger.warn('Auth Service: API returned error status, using demo signup');
          if (userData.name && userData.email && userData.password) {
            return this.createDemoSignup(userData);
          }
        }
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        return { success: false, message: errorData.message || 'Signup failed' };
      }

      const result: AuthResponse = await response.json();
      logger.info('Auth Service: Signup response:', result);

      if (result.success && result.data?.token) {
        this.setToken(result.data.token);
        this.setUser(result.data.user);
        logger.info('Auth Service: Signup successful, token stored');
      }

      return result;
    } catch (error) {
      logger.error('Auth Service: Signup error:', error);
      if (ENABLE_DEMO_MODE && userData.name && userData.email && userData.password) {
        logger.info('Auth Service: Using demo signup due to API error');
        return this.createDemoSignup(userData);
      }
      return {
        success: false,
        message: (error instanceof Error) ? error.message : 'An unexpected error occurred. Please try again.'
      };
    }
  }

  // Reset password with OTP
  async resetPassword(resetData: ResetPasswordRequest): Promise<AuthResponse> {
    try {
      logger.info('Auth Service: Attempting password reset for:', resetData.email);

      // Use Next.js API route on client (to avoid CORS)
      const url = typeof window !== 'undefined'
        ? '/api/auth/reset-password'  // Client: use Next.js API route
        : `${this.baseUrl}/user/reset-password-with-otp`;  // Server: use direct API (but won't be called)

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(resetData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        return { success: false, message: errorData.message || 'Password reset failed' };
      }

      const result: AuthResponse = await response.json();
      logger.info('Auth Service: Reset password response:', result);
      return result;
    } catch (error) {
      logger.error('Auth Service: Reset password error:', error);
      return {
        success: false,
        message: (error instanceof Error) ? error.message : 'Network error. Please check your connection and try again.'
      };
    }
  }

  // Logout user
  logout(): void {
    logger.info('Auth Service: Logging out user');
    if (typeof window !== 'undefined') {
      ClientAuth.removeToken();
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return ClientAuth.isAuthenticated();
  }

  // Get current user
  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null;
    return ClientAuth.getUser();
  }

  // Get auth token
  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return ClientAuth.getToken();
  }

  // Set auth token
  private setToken(token: string): void {
    if (typeof window === 'undefined') return;
    ClientAuth.setToken(token);
  }

  // Set user data
  private setUser(user: User): void {
    if (typeof window === 'undefined') return;
    ClientAuth.setUser(user);
  }

  // Get auth headers for API requests
  getAuthHeaders(): Record<string, string> {
    if (typeof window === 'undefined') return { 'Content-Type': 'application/json', 'Accept': 'application/json' };
    return ClientAuth.getAuthHeaders();
  }

  // Helper method for authenticated fetch requests
  private async fetchWithAuth<T>(url: string, options?: RequestInit): Promise<T> {
    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
    };

    const response = await fetch(url, {
      ...options,
      headers: { ...headers, ...options?.headers },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(errorData.message || `API error: ${response.status}`);
    }

    return response.json();
  }

  // Validate token (optional - can be used to check if token is still valid)
  async validateToken(): Promise<boolean> {
    const token = this.getToken();
    if (!token) return false;

    try {
      // You can add a token validation endpoint here if available
      // For now, we'll just check if the token exists and has a valid format
      return token.length > 10; // Basic validation
    } catch (error) {
      logger.error('Auth Service: Token validation error:', error);
      return false;
    }
  }

  // Demo mode helpers (only used when ENABLE_DEMO_MODE is true)
  private createDemoAuth(email: string, password: string): AuthResponse {
    if (!email || !password) {
      return {
        success: false,
        message: 'Please enter valid email and password',
      };
    }

    const demoUser = {
      _id: 'demo-user-id',
      name: email.split('@')[0] || 'Demo User',
      email: email,
    };
    const demoToken = 'demo-jwt-token-' + Date.now();

    this.setToken(demoToken);
    this.setUser(demoUser);

    return {
      success: true,
      message: 'Login successful (demo mode)',
      data: {
        token: demoToken,
        user: demoUser,
      },
    };
  }

  private createDemoSignup(userData: SignupRequest): AuthResponse {
    if (!userData.name || !userData.email || !userData.password) {
      return {
        success: false,
        message: 'Please fill in all required fields',
      };
    }

    const demoUser = {
      _id: 'demo-user-id-' + Date.now(),
      name: userData.name,
      email: userData.email,
    };
    const demoToken = 'demo-jwt-token-' + Date.now();

    this.setToken(demoToken);
    this.setUser(demoUser);

    return {
      success: true,
      message: 'Account created successfully (demo mode)',
      data: {
        token: demoToken,
        user: demoUser,
      },
    };
  }
}

export const authService = new AuthService();
export default authService;

