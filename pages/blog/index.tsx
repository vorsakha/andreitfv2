import { GetStaticProps } from 'next';
import Head from 'next/head';
import safeStringify from 'fast-safe-stringify';
import ContentService from '@services/content';
import { Main } from '@ui/Container';
import Posts from '@components/Posts';
import { AltTitle } from '@ui/Title';
import { BlogPostFieldsWithPlaceholder, getBase64Image } from '@utils/image';
import { baseUrl } from '@constants/index';

interface HomeProps {
  posts: BlogPostFieldsWithPlaceholder[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>TF | Blog</title>
        <meta name="description" content="Coding related blog" />
        <meta property="og:image" content={`${baseUrl}/api/og?title=blog`} />
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
  const articles = (await ContentService.instance.getEntriesByType()).items.map(
    entry => entry.fields,
  );
  const stringifiedData = safeStringify(
    await Promise.all(
      articles.map(async (p: any) => ({
        ...p,
        placeholderImage: await getBase64Image(
          `https:${p.heroImage.fields.file.url}?w=250&h=141`,
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
