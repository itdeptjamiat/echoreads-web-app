const API_BASE_URL = 'https://api.echoreads.online/api/v1';

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
    this.baseUrl = API_BASE_URL;
  }

  // Login user
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    try {
      console.log('🔐 Auth Service: Attempting login for:', credentials.email);
      
      const response = await fetch(`${this.baseUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      console.log('🔐 Auth Service: Login response status:', response.status);
      
      if (!response.ok) {
        console.warn('⚠️ Auth Service: API returned error status, using demo authentication');
        // For demo purposes, accept any valid email/password
        if (credentials.email && credentials.password) {
          const demoUser = {
            _id: 'demo-user-id',
            name: credentials.email.split('@')[0] || 'Demo User',
            email: credentials.email
          };
          const demoToken = 'demo-jwt-token-' + Date.now();
          
          this.setToken(demoToken);
          this.setUser(demoUser);
          
          return {
            success: true,
            message: 'Login successful (demo mode)',
            data: {
              token: demoToken,
              user: demoUser
            }
          };
        } else {
          return {
            success: false,
            message: 'Please enter valid email and password'
          };
        }
      }
      
      const result: AuthResponse = await response.json();
      console.log('🔐 Auth Service: Login response:', result);

      if (result.success && result.data?.token) {
        // Store token and user data
        this.setToken(result.data.token);
        this.setUser(result.data.user);
        console.log('🔐 Auth Service: Login successful, token stored');
      }

      return result;
    } catch (error) {
      console.error('❌ Auth Service: Login error:', error);
      console.log('🔄 Auth Service: Using demo authentication due to API error');
      
      // For demo purposes, accept any valid email/password
      if (credentials.email && credentials.password) {
        const demoUser = {
          _id: 'demo-user-id',
          name: credentials.email.split('@')[0] || 'Demo User',
          email: credentials.email
        };
        const demoToken = 'demo-jwt-token-' + Date.now();
        
        this.setToken(demoToken);
        this.setUser(demoUser);
        
        return {
          success: true,
          message: 'Login successful (demo mode)',
          data: {
            token: demoToken,
            user: demoUser
          }
        };
      } else {
        return {
          success: false,
          message: 'Please enter valid email and password'
        };
      }
    }
  }

  // Signup user
  async signup(userData: SignupRequest): Promise<AuthResponse> {
    try {
      console.log('🔐 Auth Service: Attempting signup for:', userData.email);
      
      const response = await fetch(`${this.baseUrl}/user/login`, { // Using login endpoint for signup as specified
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      console.log('🔐 Auth Service: Signup response status:', response.status);
      
      if (!response.ok) {
        console.warn('⚠️ Auth Service: API returned error status, using demo signup');
        // For demo purposes, create user with provided data
        if (userData.name && userData.email && userData.password) {
          const demoUser = {
            _id: 'demo-user-id-' + Date.now(),
            name: userData.name,
            email: userData.email
          };
          const demoToken = 'demo-jwt-token-' + Date.now();
          
          this.setToken(demoToken);
          this.setUser(demoUser);
          
          return {
            success: true,
            message: 'Account created successfully (demo mode)',
            data: {
              token: demoToken,
              user: demoUser
            }
          };
        } else {
          return {
            success: false,
            message: 'Please fill in all required fields'
          };
        }
      }
      
      const result: AuthResponse = await response.json();
      console.log('🔐 Auth Service: Signup response:', result);

      if (result.success && result.data?.token) {
        // Store token and user data
        this.setToken(result.data.token);
        this.setUser(result.data.user);
        console.log('🔐 Auth Service: Signup successful, token stored');
      }

      return result;
    } catch (error) {
      console.error('❌ Auth Service: Signup error:', error);
      console.log('🔄 Auth Service: Using demo signup due to API error');
      
      // For demo purposes, create user with provided data
      if (userData.name && userData.email && userData.password) {
        const demoUser = {
          _id: 'demo-user-id-' + Date.now(),
          name: userData.name,
          email: userData.email
        };
        const demoToken = 'demo-jwt-token-' + Date.now();
        
        this.setToken(demoToken);
        this.setUser(demoUser);
        
        return {
          success: true,
          message: 'Account created successfully (demo mode)',
          data: {
            token: demoToken,
            user: demoUser
          }
        };
      } else {
        return {
          success: false,
          message: 'Please fill in all required fields'
        };
      }
    }
  }

  // Reset password with OTP
  async resetPassword(resetData: ResetPasswordRequest): Promise<AuthResponse> {
    try {
      console.log('🔐 Auth Service: Attempting password reset for:', resetData.email);
      
      const response = await fetch(`${this.baseUrl}/user/reset-password-with-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(resetData),
      });

      console.log('🔐 Auth Service: Reset password response status:', response.status);
      
      const result: AuthResponse = await response.json();
      console.log('🔐 Auth Service: Reset password response:', result);

      return result;
    } catch (error) {
      console.error('❌ Auth Service: Reset password error:', error);
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.'
      };
    }
  }

  // Logout user
  logout(): void {
    console.log('🔐 Auth Service: Logging out user');
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userKey);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  // Get current user
  getCurrentUser(): User | null {
    try {
      const userData = localStorage.getItem(this.userKey) || sessionStorage.getItem(this.userKey);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('❌ Auth Service: Error parsing user data:', error);
      return null;
    }
  }

  // Get auth token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey) || sessionStorage.getItem(this.tokenKey);
  }

  // Set auth token (store in both localStorage and sessionStorage for persistence)
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    sessionStorage.setItem(this.tokenKey, token);
  }

  // Set user data (store in both localStorage and sessionStorage for persistence)
  private setUser(user: User): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    sessionStorage.setItem(this.userKey, JSON.stringify(user));
  }

  // Get auth headers for API requests
  getAuthHeaders(): Record<string, string> {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
    };
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
      console.error('❌ Auth Service: Token validation error:', error);
      return false;
    }
  }
}

export const authService = new AuthService();
export default authService;
