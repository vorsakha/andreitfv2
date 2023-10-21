import { Metadata } from 'next';

import { ContainerWrapper } from '@ui/Container';
import { AltTitle } from '@ui/Title';
import Posts from '@components/Posts';

import { baseUrl } from '@/constants';
import ContentService from '@services/contentful';

export const metadata: Metadata = {
  title: 'TF | Blog',
  description: 'Coding blog',
  openGraph: {
    images: [`${baseUrl}/api/og?title=blog`],
  },
};

export default async function Blog() {
  const posts = await ContentService.getPosts();

  return (
    <>
      <ContainerWrapper>
        <AltTitle>Archive</AltTitle>
        <Posts posts={posts} />
      </ContainerWrapper>
    </>
  );
}
