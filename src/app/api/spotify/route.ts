import { getBase64Image } from '@utils/image';
import SpotifyService from '@services/spotify';

export async function GET() {
  const response = await SpotifyService.getNowPlaying();

  return Response.json({
    song: response,
    isPlaying: response.is_playing,
    album: response.item.album.name,
    albumImageUrl: response.item.album.images[2].url,
    artist: response.item.artists.map(_artist => _artist.name).join(', '),
    songUrl: response.item.external_urls.spotify,
    title: response.item.name,
    placeholderImage: await getBase64Image(response.item.album.images[2].url),
  });
}
