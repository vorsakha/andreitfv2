import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import List from '../../src/components/List';
import { Container, Main, Wrapper } from '../../src/components/ui/Container';
import { AltTitle } from '../../src/components/ui/Title';
import { getGists, Gist } from '../../src/services/gists';

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Wrapper>
          <AltTitle>Snippets</AltTitle>
          <List items={gists} linkToSelf />
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
