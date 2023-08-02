import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import List from '@components/List';
import { Container, Main, Wrapper } from '@ui/Container';
import { AltTitle } from '@ui/Title';
import { baseUrl } from '@constants/index';
import { getGists, Gist } from '@services/gists';

interface GistsProps {
  gists: Gist[];
}

const Lib = ({ gists }: GistsProps) => {
  return (
    <Container>
      <Head>
        <title>TF | Lib</title>
        <meta
          name="description"
          content="Any code that I think will be useful sometime later"
        />
        <meta property="og:image" content={`${baseUrl}/api/og?title=lib`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Wrapper>
          <AltTitle>Snippets</AltTitle>
          <List items={gists} linkToSelf gap={20} />
        </Wrapper>
      </Main>
    </Container>
  );
};

export default Lib;

export const getStaticProps: GetStaticProps<
  GistsProps,
  { slug: string }
> = async () => {
  const gists = await getGists();

  return {
    props: {
      gists: gists,
    },
    revalidate: 120,
  };
};
