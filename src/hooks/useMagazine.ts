import { useState, useEffect } from 'react';
import { Magazine, apiService } from '../services/api';

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
      console.log('🔍 Hook: Starting to fetch magazine with ID:', id);
      setLoading(true);
      setError(null);
      
      const data = await apiService.fetchMagazineById(id);
      console.log('🔍 Hook: Received magazine data:', data);
      
      setMagazine(data);
      console.log('🔍 Hook: Magazine state updated');
    } catch (err) {
      console.error('❌ Hook: Error fetching magazine:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch magazine');
    } finally {
      setLoading(false);
      console.log('🔍 Hook: Loading finished');
    }
  };

  useEffect(() => {
    if (id) {
      fetchMagazine();
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    magazine,
    loading,
    error,
    refetch: fetchMagazine
  };
};
