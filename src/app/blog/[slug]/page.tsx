import Head from 'next/head';

import Post from '@components/Post';
import { Container, ContainerWrapper } from '@ui/Container';
import ScrollButton from '@ui/ScrollButton';

import { baseUrl } from '@/constants';
import ContentService from '@services/contentful';

export async function generateStaticParams() {
  const entries = await ContentService.getEntries();

  return entries.items.map(post => ({
    slug: post.fields.slug,
  }));
}

export default async function Lib({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await ContentService.getPostBySlugWithImage(slug);

  return (
    <Container>
      <Head>
        <title>TF | {post.title}</title>
        <meta
          name="description"
          content={post.description || 'Snippet details'}
        />
        <meta
          property="og:image"
          content={`${baseUrl}/api/og?title=${post.title}`}
        />
      </Head>

      <ContainerWrapper>
        <ScrollButton />
        <Post post={post} />
      </ContainerWrapper>
    </Container>
  );
}
