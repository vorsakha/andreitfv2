import { useQuery } from '@tanstack/react-query';
import { SongResponse } from '@services/spotify/models';

export function useSpotify() {
  const query = useQuery<SongResponse | null>({
    queryKey: ['spotify'],
    queryFn: () =>
      fetch('/api/spotify').then(r => r.json()) as Promise<SongResponse | null>,
    refetchInterval: 1000 * 60 * 30, // Refetch every 30 minutes
    enabled: typeof window !== 'undefined', // Only run on client-side
    staleTime: 1000 * 60 * 2, // 2 minutes
    retry: 2,
    refetchOnWindowFocus: true,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
  };
}
