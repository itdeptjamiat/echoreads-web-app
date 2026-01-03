'use client';

import { useState, useEffect } from 'react';
import { Magazine, apiService } from '@/lib/api';
import { logger } from '@/lib/logger';

interface UseMagazineReturn {
  magazine: Magazine | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useMagazine = (id: string): UseMagazineReturn => {
  const [magazine, setMagazine] = useState<Magazine | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMagazine = async () => {
    try {
      logger.info('Starting to fetch magazine with ID:', id);
      setLoading(true);
      setError(null);
      
      const data = await apiService.fetchMagazineById(id);
      logger.info('Received magazine data');
      
      setMagazine(data);
    } catch (err) {
      logger.error('Error fetching magazine:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch magazine');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchMagazine();
    }
  }, [id]);

  return {
    magazine,
    loading,
    error,
    refetch: fetchMagazine
  };
};

