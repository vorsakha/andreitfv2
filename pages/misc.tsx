import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';
import List from '../src/components/List';
import { Container, Main, Wrapper } from '../src/components/ui/Container';
import { AltTitle } from '../src/components/ui/Title';
import { baseUrl } from '../src/constants';
import { getData } from '../src/services/spotify';
import { getBase64Image } from '../src/utils/image';

const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

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

interface Artists {
  items: {
    name: string;
    genres: string[];
    images: {
      url: string;
    }[];
  }[];
}

interface Item {
  title: string;
  subtitle: string | string[];
  image: string;
  placeholderImage: string;
  url?: string;
}

interface MiscProps {
  songs: Item[];
  artists: Item[];
}

const Misc: FC<MiscProps> = ({ songs, artists }) => {
  return (
    <Container>
      <Head>
        <title>TF | Misc</title>
        <meta name="description" content="Miscellaneous | Anything really" />
        <meta
          property="og:image"
          content={`${baseUrl}/api/og?title=Miscellaneous | Anything really`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Wrapper>
          <AltTitle>Top tracks</AltTitle>
          <List items={songs} />
        </Wrapper>
        <Wrapper>
          <AltTitle>Top artists</AltTitle>
          <List items={artists} />
        </Wrapper>
      </Main>
    </Container>
  );
};

export default Misc;

export const getStaticProps: GetStaticProps<
  MiscProps,
  { slug: string }
> = async () => {
  const songsResponse = await getData(TOP_TRACKS_ENDPOINT);
  const artistsResponse = await getData(TOP_ARTISTS_ENDPOINT);

  const songsData = (await songsResponse.json()) as Songs;
  const artistsData = (await artistsResponse.json()) as Artists;

  const songs = (await Promise.all(
    songsData.items.map(async item => ({
      title: item.name,
      subtitle: item.artists.map(s => s.name),
      image: item.album.images[2].url,
      url: item.external_urls.spotify,
      placeholderImage: await getBase64Image(item.album.images[2].url),
    })),
  )) as unknown as Item[];

  const artists = (await Promise.all(
    artistsData.items.map(async item => ({
      title: item.name,
      subtitle: item.genres,
      image: item.images[2].url,
      placeholderImage: await getBase64Image(item.images[2].url),
    })),
  )) as unknown as Item[];

  return {
    props: {
      songs,
      artists,
    },
    revalidate: 120,
  };
};
