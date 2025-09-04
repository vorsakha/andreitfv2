import { Metadata } from 'next';

import Banner from '@components/Banner';
import List from '@components/List';
import Link from 'next/link';

import { baseUrl } from '@/constants';

import { ContainerWrapper } from '@ui/Container';
import { AltTitle, Title } from '@ui/Title';

import ContentService from '@services/contentful';
import { PROJECTS } from '@/constants/projects';

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
        <Title className="mb-[-16px]">Featured Posts</Title>
        <List
          items={articles}
          $grayscaleImage
          linkToSelf
          fixedItemsLength={2}
          $gap={4}
        />
        <Link href="/blog" className="underline">
          View posts
        </Link>
      </div>

      <div className="mt-8">
        <Title className="mb-[-16px]">Featured Projects</Title>
        <List
          items={PROJECTS.map(p => ({
            title: p.title,
            subtitle: p.summary,
            image: p.imageUrl,
            url: `/projects/${p.slug}`,
            placeholderImage: undefined,
          }))}
          $grayscaleImage
          fixedItemsLength={2}
          $gap={4}
        />
        <Link href="/projects" className="underline">
          View projects
        </Link>
      </div>
    </ContainerWrapper>
  );
}
