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

const cardClassName =
  'inline-flex w-full max-w-[280px] items-center justify-start rounded-[1.1rem] border border-[var(--color-border)] bg-[var(--theme-surface)] px-4 py-[0.9rem] backdrop-blur-[12px]';

const eyebrowStyle = {
  fontFamily: 'var(--font-mono), monospace',
};

const CurrentlyPlayingLoading = () => {
  return (
    <div className={cardClassName}>
      <div className="flex flex-row gap-3">
        <SkeletonProfile />
        <div className="flex flex-col justify-center gap-1.5">
          <SkeletonTile width="88px" />
          <SkeletonTile width="112px" height="6px" />
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
    <div className="w-full max-w-[280px]">
      <a
        className={cardClassName}
        target="_blank"
        rel="noreferrer"
        href={
          song?.isPlaying
            ? song.songUrl
            : `https://open.spotify.com/user/${SPOTIFY_USER}?si=yTsrZT5JSHOp7tn3ist7Ig`
        }
      >
        <div className="flex items-center gap-3">
          {song?.isPlaying ? (
            <Image
              src={song?.albumImageUrl}
              alt={song?.album}
              width={36}
              height={36}
              placeholder="blur"
              blurDataURL={song?.placeholderImage}
              className="h-11 w-11 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(255,24,76,0.08)]">
              <SiSpotify
                size={18}
                className="text-[var(--color-primary-solid)]"
              />
            </div>
          )}

          <div className="flex flex-col gap-1 overflow-hidden">
            <span
              className="text-[0.68rem] uppercase tracking-[0.12em] text-[var(--theme-subtle)]"
              style={eyebrowStyle}
            >
              listening
            </span>
            <p className="truncate text-[0.95rem] leading-tight">
              {song?.isPlaying ? song.title : 'Off Spotify right now'}
            </p>
            <div
              className="truncate text-sm"
              style={{ color: 'var(--theme-muted)' }}
            >
              {song?.isPlaying ? song.artist : 'Open profile'}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CurrentlyPlaying;
