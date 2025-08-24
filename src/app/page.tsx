import { Metadata } from 'next';

import Banner from '@components/Banner';
import List from '@components/List';

import { baseUrl } from '@/constants';

import { ContainerWrapper } from '@ui/Container';
import { AltTitle } from '@ui/Title';

import ContentService from '@services/contentful';

export const metadata: Metadata = {
  title: 'TF',
  description: "Andrei T. Ferreira's website",
  openGraph: {
    images: [`${baseUrl}/api/og?title=Andrei T. Ferreira's website`],
  },
};

export default async function Home() {
  const articles = await ContentService.getHomeEntries();

  return (
    <ContainerWrapper>
      <Banner />
      <div>
        <AltTitle>Featured Posts</AltTitle>
        <List items={articles} $grayscaleImage linkToSelf />
      </div>
    </ContainerWrapper>
  );
}
