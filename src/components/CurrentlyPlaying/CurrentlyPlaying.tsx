import React, { FC } from 'react';

import { SiSpotify } from '@react-icons/all-files/si/SiSpotify';
import Image from 'next/image';
import { SongResponse } from '@services/spotify/models';

interface CurrentlyPlayingProps {
  song: SongResponse;
}

const CurrentlyPlaying: FC<CurrentlyPlayingProps> = ({ song }) => {
  return (
    <div className="my-6">
      <a
        className="relative inline-flex items-center justify-start my-4 rounded gap-2.5 no-underline"
        target="_blank"
        rel="noopener noreferer noreferrer"
        href={
          song?.isPlaying
            ? song.songUrl
            : 'https://open.spotify.com/user/andrex15?si=yTsrZT5JSHOp7tn3ist7Ig'
        }
      >
        <div className="flex-shrink-0">
          {song?.isPlaying ? (
            <Image
              src={song?.albumImageUrl}
              alt={song?.album}
              width={64}
              height={64}
              placeholder="blur"
              blurDataURL={song?.placeholderImage}
              className="rounded object-cover w-16 h-16"
            />
          ) : (
            <SiSpotify 
              size={64} 
              color="#ff184c"
              className="drop-shadow-[0px_2px_6px_rgba(255,24,76,0.5)]"
            />
          )}
        </div>

        <div className="relative pr-7">
          <p className="underline leading-4">
            {song?.isPlaying ? song.title : 'Not Playing'}
          </p>
          <small 
            className="leading-4"
            style={{ color: '#a3a3a3', textShadow: 'none', fontStyle: 'italic' }}
          >
            {song?.isPlaying ? song.artist : 'Spotify'}
          </small>
          {song?.isPlaying && (
            <div className="absolute bottom-0 right-0.5 drop-shadow-[0px_2px_6px_rgba(255,24,76,0.5)]">
              <SiSpotify size={20} color="#ff184c" />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default CurrentlyPlaying;
