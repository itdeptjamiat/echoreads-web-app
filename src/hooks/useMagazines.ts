import { useState, useEffect } from 'react';
import { Magazine, apiService } from '../services/api';

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
      } else {
        setMagazines([]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch magazines');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMagazines();
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return {
    magazines,
    loading,
    error,
    refetch: fetchMagazines
  };
};

export const useMagazinesByType = (type: 'magzine' | 'article' | 'digest'): UseMagazinesReturn => {
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
