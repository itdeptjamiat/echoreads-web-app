'use client';

/**
 * Client-side authentication utilities
 * Handles token storage and provides methods for client components
 */

export class ClientAuth {
  private static tokenKey = 'echoreads_auth_token';
  private static userKey = 'echoreads_user_data';

  // Get token from localStorage/sessionStorage
  static getToken(): string | null {
    if (typeof window === 'undefined') return null;
    try {
      return localStorage.getItem(this.tokenKey) || sessionStorage.getItem(this.tokenKey);
    } catch {
      return null;
    }
  }

  // Set token in both localStorage and sessionStorage
  static setToken(token: string): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(this.tokenKey, token);
      sessionStorage.setItem(this.tokenKey, token);
      // Also set as cookie for middleware access
      document.cookie = `${this.tokenKey}=${token}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax`;
    } catch (error) {
      console.error('Failed to set token:', error);
    }
  }

  // Remove token from all storage locations
  static removeToken(): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(this.tokenKey);
      sessionStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.userKey);
      sessionStorage.removeItem(this.userKey);
      // Remove cookie
      document.cookie = `${this.tokenKey}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    } catch (error) {
      console.error('Failed to remove token:', error);
    }
  }

  // Get user data
  static getUser(): any | null {
    if (typeof window === 'undefined') return null;
    try {
      const userData = localStorage.getItem(this.userKey) || sessionStorage.getItem(this.userKey);
      return userData ? JSON.parse(userData) : null;
    } catch {
      return null;
    }
  }

  // Set user data
  static setUser(user: any): void {
    if (typeof window === 'undefined') return;
    try {
      const userData = JSON.stringify(user);
      localStorage.setItem(this.userKey, userData);
      sessionStorage.setItem(this.userKey, userData);
    } catch (error) {
      console.error('Failed to set user data:', error);
    }
  }

  // Check if user is authenticated
  static isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Add token to fetch headers
  static getAuthHeaders(): Record<string, string> {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...(token && { 'x-auth-token': token }), // Custom header for middleware
    };
  }
}