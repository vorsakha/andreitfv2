import querystring from 'querystring';

import {
  NOW_PLAYING_ENDPOINT,
  TOKEN_ENDPOINT,
  client_id,
  client_secret,
  refresh_token,
} from '@constants/spotify.constants';
import { Song } from '@services/spotify/models';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const SpotifyService = {
  async getAccessToken() {
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
  },

  async getData(endpoint: string) {
    const { access_token } = await this.getAccessToken();

    return fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },

  async getNowPlaying(): Promise<Song> {
    const { access_token } = await this.getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.json();
  },
};

export default SpotifyService;
