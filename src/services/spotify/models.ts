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

interface SongResponse {
  isPlaying: boolean;
  album: string;
  albumImageUrl: string;
  artist: string;
  songUrl: string;
  title: string;
  placeholderImage: string;
}

export type { Song, SongResponse };
