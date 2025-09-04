import { getBase64Image } from '@utils/image';
import SpotifyService from '@services/spotify';

export async function GET() {
  const response = await SpotifyService.getNowPlaying();

  if (!response) {
    return new Response(
      JSON.stringify({
        song: null,
        isPlaying: false,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control':
            'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0, stale-while-revalidate=0',
        },
      },
    );
  }

  const albumImage = response.item?.album?.images?.[2]?.url || '';

  return new Response(
    JSON.stringify({
      song: response,
      isPlaying: !!response.is_playing,
      album: response.item?.album?.name || '',
      albumImageUrl: albumImage,
      artist:
        response.item?.artists?.map(_artist => _artist.name).join(', ') || '',
      songUrl: response.item?.external_urls?.spotify || '',
      title: response.item?.name || '',
      placeholderImage: albumImage ? await getBase64Image(albumImage) : '',
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control':
          'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0, stale-while-revalidate=0',
      },
    },
  );
}
