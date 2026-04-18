'use client';

import CurrentlyPlaying from '@components/CurrentlyPlayingV2';
import { useSpotify } from '@hooks/useSpotify';

const HomeListening = () => {
  const { data, isLoading } = useSpotify();

  return <CurrentlyPlaying song={data || null} loading={isLoading} />;
};

export default HomeListening;
