import { logger } from './logger';
import { ClientAuth } from './client-auth';

// Direct API URL for server-side calls
const DIRECT_API_URL = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.echoreads.online/api/v1';

export interface Magazine {
  _id: string;
  mid: number;
  name: string;
  image: string;
  file: string;
  type: 'pro' | 'free';
  fileType: string;
  magazineType: 'magazine' | 'article' | 'digest'; // Fixed typo: magzine -> magazine
  isActive: boolean;
  category: string;
  downloads: number;
  description: string;
  rating: number;
  reviews: Array<{
    userId: number;
    rating: number;
    review: string;
    time: string;
    _id: string;
  }>;
  createdAt: string;
  viewedBy: Array<{
    userId: number;
    viewedAt: string;
    _id: string;
  }>;
  views: number;
  likedBy: Array<{
    userId: number;
    likedAt: string;
    _id: string;
  }>;
  likes: number;
  readBy: Array<unknown>;
  reads: number;
  total_pages: number;
  audioFile?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: Magazine[];
}

export interface SingleMagazineResponse {
  success: boolean;
  message: string;
  data: Magazine;
}

class ApiService {
  private baseUrl: string;
  private cache: Map<string, { data: unknown; timestamp: number }> = new Map();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes
  private readonly FETCH_TIMEOUT = 10000; // 10 seconds

  constructor() {
    // Use Next.js API routes on client (to avoid CORS)
    // Server-side: use direct API (but won't be called)
    if (typeof window !== 'undefined') {
      this.baseUrl = '/api';  // Client: use Next.js API routes (same origin, no CORS)
    } else {
      this.baseUrl = DIRECT_API_URL;  // Server: use direct API (but won't be called)
    }
    logger.info('API Service initialized with base URL:', this.baseUrl);
  }

  // Get authentication token from localStorage (client-side only)
  private getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    return ClientAuth.getToken();
  }

  // Create headers with optional authentication (kept for potential future use)
  private getHeaders(includeAuth: boolean = false): Record<string, string> {
    if (typeof window === 'undefined') {
      return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };
    }

    if (includeAuth) {
      return ClientAuth.getAuthHeaders();
    }

    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  // Fetch with timeout
  private async fetchWithTimeout<T>(url: string, options?: RequestInit): Promise<Response> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), this.FETCH_TIMEOUT);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(id);
      return response;
    } catch (error) {
      clearTimeout(id);
      // Log the error for debugging
      if (error instanceof Error) {
        logger.error('Fetch error:', error.message, error.name);
        if (error.name === 'AbortError') {
          throw new Error('Request timed out');
        }
        // Re-throw with more context
        throw new Error(`Network error: ${error.message}`);
      }
      // Handle non-Error objects (shouldn't happen, but be safe)
      const errorMessage = String(error || 'Unknown error');
      logger.error('Non-Error fetch error:', errorMessage);
      throw new Error(`Network error: ${errorMessage}`);
    }
  }

  async fetchMagazines(): Promise<Magazine[]> {
    try {
      // Use Next.js API route on client (to avoid CORS)
      // The API route proxies the request server-side (no CORS, but may need auth)
      if (typeof window === 'undefined') {
        logger.warn('fetchMagazines called on server-side, returning empty array');
        return [];
      }
      
      const url = '/api/magazines';  // Use Next.js API route (same origin, no CORS)
      logger.info('Fetching magazines from:', url);

      let response: Response;
      try {
        response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
      } catch (fetchError) {
        // Catch CORS and network errors
        logger.error('Fetch failed (CORS/network error):', fetchError);
        return [];
      }
      
      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        logger.error(`API returned ${response.status}:`, errorText.substring(0, 200));
        return [];
      }
      
      let result: ApiResponse;
      try {
        result = await response.json();
        logger.info('API response received:', {
          success: result.success,
          message: result.message,
          dataLength: Array.isArray(result.data) ? result.data.length : 'not an array'
        });
      } catch (jsonError) {
        logger.error('Failed to parse JSON response:', jsonError);
        return [];
      }
      
      if (!result.success) {
        logger.warn('API response indicates failure:', result.message);
        return [];
      }
      
      if (!Array.isArray(result.data)) {
        logger.error('API response data is not an array:', typeof result.data);
        return [];
      }
      
      // Transform magzineType to magazineType (fix typo from API)
      const magazines = (result.data || []).map((mag) => {
        const apiMag = mag as unknown as { magzineType?: 'magazine' | 'article' | 'digest' };
        const magazineType = apiMag.magzineType || mag.magazineType || 'magazine';
        return {
          ...mag,
          magazineType: magazineType as 'magazine' | 'article' | 'digest',
        } as Magazine;
      });

      logger.info(`Successfully fetched ${magazines.length} magazines`);
      return magazines;
    } catch (error) {
      // Final catch-all for any unexpected errors
      logger.error('Unexpected error fetching magazines:', error);
      return [];
    }
  }

  async fetchMagazineById(id: string): Promise<Magazine> {
    try {
      // Use Next.js API route on client (to avoid CORS)
      if (typeof window === 'undefined') {
        logger.warn('fetchMagazineById called on server-side, returning fallback');
        return this.getFallbackMagazineById(id);
      }
      
      const url = `/api/magazines/${id}`;  // Use Next.js API route (same origin, no CORS)
      logger.info('Fetching magazine by ID:', id, 'from:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      
      if (!response.ok) {
        logger.warn(`API returned ${response.status} for magazine ${id}, returning fallback`);
        return this.getFallbackMagazineById(id);
      }
      
      const result: SingleMagazineResponse = await response.json();
      
      if (!result.success) {
        logger.warn('API response indicates failure for magazine ID', id, ':', result.message);
        return this.getFallbackMagazineById(id);
      }

      // Transform magzineType to magazineType
      const apiMag = result.data as unknown as { magzineType?: 'magazine' | 'article' | 'digest' };
      const magazineType = apiMag.magzineType || result.data.magazineType || 'magazine';
      const magazine: Magazine = {
        ...result.data,
        magazineType: magazineType as 'magazine' | 'article' | 'digest',
      };

      logger.info('Successfully fetched magazine:', magazine.name);
      return magazine;
    } catch (error) {
      logger.error('Error fetching magazine by ID:', id, error);
      return this.getFallbackMagazineById(id);
    }
  }

  // Fallback data method (simplified, no hardcoded data)
  private getFallbackMagazineById(id: string): Magazine {
    logger.warn('Returning fallback data for magazine ID:', id);
    return {
      _id: id,
      mid: 0,
      name: "Content Not Found",
      image: "https://via.placeholder.com/400x600/1f2937/ffffff?text=EchoReads",
      file: "",
      type: "free",
      fileType: "pdf",
      magazineType: "magazine",
      isActive: true,
      category: "General",
      downloads: 0,
      description: "This content could not be found or is no longer available.",
      rating: 0,
      reviews: [],
      createdAt: new Date().toISOString(),
      viewedBy: [],
      views: 0,
      likedBy: [],
      likes: 0,
      readBy: [],
      reads: 0,
      total_pages: 0
    };
  }

  async fetchMagazinesByType(type: 'magazine' | 'article' | 'digest'): Promise<Magazine[]> {
    try {
      logger.info('Fetching magazines by type:', type);
      const magazines = await this.fetchMagazines();
      const filtered = magazines.filter((mag) => mag.magazineType === type);
      logger.info(`Found ${filtered.length} magazines of type ${type}`);
      return filtered;
    } catch (error) {
      logger.error('Error fetching magazines by type:', type, error);
      return []; // Return empty array on error
    }
  }

  async fetchMagazinesByCategory(category: string): Promise<Magazine[]> {
    try {
      logger.info('Fetching magazines by category:', category);
      const magazines = await this.fetchMagazines();
      const filtered = magazines.filter(
        (mag) => mag.category.toLowerCase() === category.toLowerCase()
      );
      logger.info(`Found ${filtered.length} magazines in category ${category}`);
      return filtered;
    } catch (error) {
      logger.error('Error fetching magazines by category:', category, error);
      return []; // Return empty array on error
    }
  }
}

export const apiService = new ApiService();
export default apiService;

