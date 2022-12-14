import { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';

interface Artists {
  items: {
    name: string;
    genres: string[];
    images: {
      url: string;
    }[];
  }[];
}

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`;
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

  return fetch(TOP_ARTISTS_ENDPOINT, {
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

  const artists = (await response.json()) as Artists;

  const items = artists.items.map(item => ({
    title: item.name,
    subtitle: item.genres,
    image: item.images[2].url,
  }));

  return res.status(200).json({ items });
}
