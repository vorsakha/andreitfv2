import { GetStaticProps } from 'next';
import Head from 'next/head';
import safeStringify from 'fast-safe-stringify';
import { IBlogPostFields } from '../../src/@types/contentful';
import ContentService from '../../src/services/content';
import { Main } from '../../src/components/ui/Container';
import Posts from '../../src/components/Posts';
import { AltTitle } from '../../src/components/ui/Title';
import {
  BlogPostFieldsWithPlaceholder,
  getBase64Image,
} from '../../src/utils/image';

interface HomeProps {
  posts: BlogPostFieldsWithPlaceholder[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>TF | Blog</title>
        <meta name="description" content="Coding related blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <AltTitle>Archive</AltTitle>
        <Posts posts={posts} />
      </Main>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const articles = (
    await ContentService.instance.getEntriesByType<IBlogPostFields>('blogPost')
  ).map(entry => entry.fields);
  const stringifiedData = safeStringify(
    await Promise.all(
      articles.map(async p => ({
        ...p,
        placeholderImage: await getBase64Image(
          `https:${p.heroImage.fields.file.url}?w=200&h=100`,
        ),
      })),
    ),
  );
  const posts = JSON.parse(stringifiedData);

  return {
    props: {
      posts,
    },
    revalidate: 120,
  };
};
