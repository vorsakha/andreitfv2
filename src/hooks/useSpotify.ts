import { useQuery } from '@tanstack/react-query';
import { SongResponse } from '@services/spotify/models';
import useIsClient from '@hooks/useIsClient';

export function useSpotify() {
  const isClient = useIsClient();

  const query = useQuery<SongResponse | null>({
    queryKey: ['spotify'],
    queryFn: () =>
      fetch('/api/spotify').then(r => r.json()) as Promise<SongResponse | null>,
    refetchInterval: 1000 * 60 * 30, // Refetch every 30 minutes
    enabled: isClient,
    staleTime: 1000 * 60 * 2, // 2 minutes
    retry: 2,
    refetchOnWindowFocus: true,
  });

  return {
    data: isClient ? query.data : undefined,
    isLoading: !isClient || query.isLoading,
  };
}
