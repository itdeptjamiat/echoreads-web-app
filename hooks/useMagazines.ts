'use client';

import { useState, useEffect } from 'react';
import { Magazine, apiService } from '@/lib/api';
import { logger } from '@/lib/logger';

interface UseMagazinesReturn {
  magazines: Magazine[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useMagazines = (): UseMagazinesReturn => {
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMagazines = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await apiService.fetchMagazines();
      
      if (Array.isArray(data)) {
        setMagazines(data);
        // Don't set error for empty array - just show empty state
        // The API route already handles errors gracefully
      } else {
        setMagazines([]);
        setError('Invalid response from server');
      }
    } catch (err) {
      logger.error('Error fetching magazines:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch magazines');
      setMagazines([]); // Ensure we have an empty array
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMagazines();
  }, []);

  return {
    magazines,
    loading,
    error,
    refetch: fetchMagazines
  };
};

export const useMagazinesByType = (type: 'magazine' | 'article' | 'digest'): UseMagazinesReturn => {
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMagazines = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.fetchMagazinesByType(type);
      setMagazines(data);
    } catch (err) {
      logger.error(`Error fetching ${type}s:`, err);
      setError(err instanceof Error ? err.message : `Failed to fetch ${type}s`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMagazines();
  }, [type]);

  return {
    magazines,
    loading,
    error,
    refetch: fetchMagazines
  };
};

