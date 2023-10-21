import Head from 'next/head';
import { Metadata } from 'next';

import List from '@components/List';
import { AltTitle } from '@ui/Title';
import { Container, ContainerWrapper } from '@ui/Container';

import GistService from '@services/gist';
import { baseUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'TF | Lib',
  description: 'Any code that I think will be useful sometime later',
};

export default async function Snippets() {
  const gists = await GistService.getGists();

  return (
    <Container>
      <Head>
        <meta property="og:image" content={`${baseUrl}/api/og?title=lib`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContainerWrapper>
        <AltTitle>Snippets</AltTitle>
        <List items={gists} linkToSelf gap={20} />
      </ContainerWrapper>
    </Container>
  );
}
