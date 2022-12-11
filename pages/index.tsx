import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IBlogPostFields } from '../src/@types/contentful';
import ContentService from '../src/services/content';
import safeStringify from 'fast-safe-stringify';
import styled from 'styled-components';

interface HomeProps {
  posts: IBlogPostFields[];
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

export default function Home({ posts }: HomeProps) {
  return (
    <Container>
      <Head>
        <title>TF</title>
        <meta name="description" content="Andrei T. Ferreira website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {posts.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`}>
              <h2>{post.title} &rarr;</h2>
              <p>{post.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Container>
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
