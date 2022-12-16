import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import List from '../../src/components/List';
import { Container, Main, Wrapper } from '../../src/components/ui/Container';
import { AltTitle } from '../../src/components/ui/Title';
import { getGists } from '../../src/services/gists';

const Lib = ({ gists }: any) => {
  return (
    <Container>
      <Head>
        <title>TF | Lib</title>
        <meta name="description" content="Andrei T. Ferreira website" />
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
  any,
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
