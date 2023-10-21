import { Metadata } from 'next';
import Head from 'next/head';

import { ContainerWrapper } from '@ui/Container';
import { AltTitle } from '@ui/Title';
import Posts from '@components/Posts';

import { baseUrl } from '@/constants';
import ContentService from '@services/contentful';

export const metadata: Metadata = {
  title: 'TF | Blog',
  description: 'Coding blog',
};

export default async function Blog() {
  const posts = await ContentService.getPosts();

  return (
    <>
      <Head>
        <meta property="og:image" content={`${baseUrl}/api/og?title=blog`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContainerWrapper>
        <AltTitle>Archive</AltTitle>
        <Posts posts={posts} />
      </ContainerWrapper>
    </>
  );
}
