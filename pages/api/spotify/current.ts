import { getBase64Image } from './../../../src/utils/image';
import { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';

interface Song {
  is_playing: boolean;
  item: {
    name: string;
    artists: {
      name: string;
    }[];
    album: {
      name: string;
      images: {
        url: string;
      }[];
    };
    external_urls: {
      spotify: string;
    };
  };
}

export interface SongResponse {
  isPlaying: boolean;
  album: string;
  albumImageUrl: string;
  artist: string;
  songUrl: string;
  title: string;
  placeholderImage: string;
}

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = (await response.json()) as Song;
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map(_artist => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[2].url;
  const songUrl = song.item.external_urls.spotify;
  const placeholderImage = await getBase64Image(albumImageUrl);

  return res.status(200).json({
    song,
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    placeholderImage,
  });
}
