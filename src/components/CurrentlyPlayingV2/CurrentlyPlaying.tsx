import React, { FC } from 'react';

import { SiSpotify } from '@react-icons/all-files/si/SiSpotify';
import Image from 'next/image';
import { SongResponse } from '@services/spotify/models';
import { SPOTIFY_USER } from '@constants/spotify.constants';
import { SkeletonProfile, SkeletonTile } from '@ui/Skeleton';

interface CurrentlyPlayingProps {
  song: SongResponse | null;
  loading: boolean;
}

const CurrentlyPlayingLoading = () => {
  return (
    <div className="my-6 w-[150px]">
      <div className="flex flex-row gap-1">
        <SkeletonProfile />
        <div className="flex flex-col justify-center gap-1.5">
          <SkeletonTile width="80px" />
          <SkeletonTile width="80px" height="6px" />
        </div>
      </div>
    </div>
  );
};

const CurrentlyPlaying: FC<CurrentlyPlayingProps> = ({ song, loading }) => {
  if (loading) {
    return <CurrentlyPlayingLoading />;
  }

  return (
    <div className="my-6 w-[150px]">
      <a
        className="relative inline-flex items-center justify-start my-4 rounded gap-1 no-underline currently-playing-group"
        target="_blank"
        rel="noopener noreferer noreferrer"
        href={
          song?.isPlaying
            ? song.songUrl
            : `https://open.spotify.com/user/${SPOTIFY_USER}?si=yTsrZT5JSHOp7tn3ist7Ig`
        }
      >
        <div className="flex items-center">
          {song?.isPlaying ? (
            <Image
              src={song?.albumImageUrl}
              alt={song?.album}
              width={36}
              height={36}
              placeholder="blur"
              blurDataURL={song?.placeholderImage}
              className="rounded object-cover w-9 h-9 grayscale transition-all duration-200 ease-in-out currently-playing-image"
            />
          ) : (
            <div className="currently-playing-svg">
              <SiSpotify
                size={36}
                className="transition-all duration-200 ease-in-out text-[--color-gray-solid]"
              />
            </div>
          )}
        </div>

        <div className="relative flex flex-col justify-start gap-1.5">
          <p
            className="text-xs underline leading-[10px] self-start whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              maxWidth: 'calc(150px - 40px)',
            }}
          >
            {song?.isPlaying ? song.title : 'Not Playing'}
          </p>
          <div
            className="text-[10px] leading-[10px] self-start whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              color: '#a3a3a3',
              textShadow: 'none',
              maxWidth: 'calc(150px - 40px - 16px)',
            }}
          >
            {song?.isPlaying ? song.artist : 'Spotify'}
          </div>
          {song?.isPlaying && (
            <div className="absolute bottom-0 -right-5 flex justify-end currently-playing-svg">
              <SiSpotify
                size={16}
                className="transition-all duration-200 ease-in-out text-[--color-gray-solid]"
              />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default CurrentlyPlaying;
