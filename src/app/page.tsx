import Head from 'next/head';
import { Metadata } from 'next';

import Banner from '@components/Banner';
import List from '@components/List';

import { baseUrl } from '@/constants';

import { Container, ContainerWrapper } from '@ui/Container';
import { AltTitle } from '@ui/Title';

import ContentService from '@services/contentful';

export const metadata: Metadata = {
  title: 'TF',
  description: "Andrei T. Ferreira's website",
};

export default async function Home() {
  const articles = await ContentService.getHomeEntries();

  return (
    <Container>
      <Head>
        <meta
          property="og:image"
          content={`${baseUrl}/api/og?title=Andrei T. Ferreira's website`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContainerWrapper>
        <Banner />
        <div>
          <AltTitle>Featured Posts</AltTitle>
          <List items={articles} $grayscaleImage linkToSelf />
        </div>
      </ContainerWrapper>
    </Container>
  );
}
