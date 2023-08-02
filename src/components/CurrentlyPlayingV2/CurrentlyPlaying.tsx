import React, { FC } from 'react';

import { SiSpotify } from '@react-icons/all-files/si/SiSpotify';
import { SongResponse } from '@pages/api/spotify/current';
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
import { useTheme } from 'styled-components';

interface CurrentlyPlayingProps {
  song: SongResponse;
}

const CurrentlyPlaying: FC<CurrentlyPlayingProps> = ({ song }) => {
  const theme = useTheme();

  return (
    <CurrentlyPlayingContainer>
      <CurrentlyPlayingWrapper
        target="_blank"
        rel="noopener noreferer noreferrer"
        href={
          song?.isPlaying
            ? song.songUrl
            : 'https://open.spotify.com/user/andrex15?si=yTsrZT5JSHOp7tn3ist7Ig'
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
            <SiSpotify size={36} color={theme.colors.red.solid} />
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
                <SiSpotify size={16} color={theme.colors.red.solid} />
              </CurrentlyPlayingIcon>
            )}
          </CurrentlyPlayingArtist>
        </CurrentlyPlayingContentWrapper>
      </CurrentlyPlayingWrapper>
    </CurrentlyPlayingContainer>
  );
};

export default CurrentlyPlaying;
