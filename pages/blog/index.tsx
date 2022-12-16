import { GetStaticProps } from 'next';
import Head from 'next/head';
import safeStringify from 'fast-safe-stringify';
import { IBlogPostFields } from '../../src/@types/contentful';
import ContentService from '../../src/services/content';
import { Main } from '../../src/components/ui/Container';
import Posts from '../../src/components/Posts';
import ScrollButton from '../../src/components/ui/ScrollButton';
import { AltTitle } from '../../src/components/ui/Title';

interface HomeProps {
  posts: IBlogPostFields[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>TF | Blog</title>
        <meta name="description" content="Andrei Ferreira's blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ScrollButton />
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
  const stringifiedData = safeStringify(articles);
  const posts = JSON.parse(stringifiedData);

  return {
    props: {
      posts,
    },
  };
};
