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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await ContentService.getPostBySlugWithImage(slug);

  return {
    title: `TF | ${post.title}`,
    description: post.description,
    openGraph: {
      images: [`${baseUrl}/api/og?title=${post.title}`],
    },
  };
}

export default async function Lib({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await ContentService.getPostBySlugWithImage(slug);

  return (
    <Container>
      <ContainerWrapper>
        <ScrollButton />
        <Post post={post} />
      </ContainerWrapper>
    </Container>
  );
}
