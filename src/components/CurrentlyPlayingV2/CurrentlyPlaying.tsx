import React, { FC } from 'react';

import { SiSpotify } from '@react-icons/all-files/si/SiSpotify';
import Image from 'next/image';
import {
  CurrentlyPlayingArtist,
  CurrentlyPlayingContainer,
  CurrentlyPlayingContentWrapper,
  CurrentlyPlayingIcon,
  CurrentlyPlayingImageWrapper,
  CurrentlyPlayingSong,
  CurrentlyPlayingWrapper,
} from '@components/CurrentlyPlayingV2/CurrentlyPlaying.styles';
import { useTheme } from '@hooks/useTheme';
import CurrentlyPlayingLoading from '@components/CurrentlyPlayingV2/CurrentlyPlayingLoading';
import { SongResponse } from '@services/spotify/models';
import { SPOTIFY_USER } from '@constants/spotify.constants';

interface CurrentlyPlayingProps {
  song: SongResponse | null;
  loading: boolean;
}

const CurrentlyPlaying: FC<CurrentlyPlayingProps> = ({ song, loading }) => {
  const theme = useTheme();

  if (loading) {
    return <CurrentlyPlayingLoading />;
  }

  return (
    <CurrentlyPlayingContainer>
      <CurrentlyPlayingWrapper
        target="_blank"
        rel="noopener noreferer noreferrer"
        href={
          song?.isPlaying
            ? song.songUrl
            : `https://open.spotify.com/user/${SPOTIFY_USER}?si=yTsrZT5JSHOp7tn3ist7Ig`
        }
      >
        <CurrentlyPlayingImageWrapper>
          {song?.isPlaying ? (
            <Image
              src={song?.albumImageUrl}
              alt={song?.album}
              width={36}
              height={36}
              placeholder="blur"
              blurDataURL={song?.placeholderImage}
            />
          ) : (
            <SiSpotify size={36} color={theme.colors.gray.solid} />
          )}
        </CurrentlyPlayingImageWrapper>

        <CurrentlyPlayingContentWrapper>
          <CurrentlyPlayingSong>
            {song?.isPlaying ? song.title : 'Not Playing'}
          </CurrentlyPlayingSong>
          <CurrentlyPlayingArtist>
            {song?.isPlaying ? song.artist : 'Spotify'}
            {song?.isPlaying && (
              <CurrentlyPlayingIcon>
                <SiSpotify size={16} color={theme.colors.gray.solid} />
              </CurrentlyPlayingIcon>
            )}
          </CurrentlyPlayingArtist>
        </CurrentlyPlayingContentWrapper>
      </CurrentlyPlayingWrapper>
    </CurrentlyPlayingContainer>
  );
};

export default CurrentlyPlaying;
