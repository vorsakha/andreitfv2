import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';
import List from '../src/components/List';
import { Container, Main, Wrapper } from '../src/components/ui/Container';
import { Spinner } from '../src/components/ui/Spinner';
import { AltTitle } from '../src/components/ui/Title';

const Misc = () => {
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data: songs, isLoading: songIsLoading } = useSWR(
    '/api/spotify/top/tracks',
    fetcher,
  );
  const { data: artists, isLoading: artistsIsLoading } = useSWR(
    '/api/spotify/top/artists',
    fetcher,
  );

  return (
    <Container>
      <Head>
        <title>TF | Misc</title>
        <meta name="description" content="Andrei T. Ferreira website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        {!artistsIsLoading && !songIsLoading ? (
          <>
            <Wrapper>
              <AltTitle>Top tracks</AltTitle>
              <List items={songs.items} paginate />
            </Wrapper>
            <Wrapper>
              <AltTitle>Top artists</AltTitle>
              <List items={artists.items} paginate />
            </Wrapper>
          </>
        ) : (
          <Spinner />
        )}
      </Main>
    </Container>
  );
};

export default Misc;
