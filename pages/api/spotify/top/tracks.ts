import { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';

interface Songs {
  items: {
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
  }[];
}

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
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

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await getTopTracks();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ error: true });
  }

  const tracks = (await response.json()) as Songs;

  const items = tracks.items.map(item => ({
    title: item.name,
    subtitle: item.artists.map(a => a.name),
    image: item.album.images[2].url,
    url: item.external_urls.spotify,
  }));

  return res.status(200).json({ items });
}
