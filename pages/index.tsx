import { GetStaticProps } from 'next';
import Head from 'next/head';
import { IBlogPostFields } from '../src/@types/contentful';
import ContentService from '../src/services/content';
import safeStringify from 'fast-safe-stringify';
import styled from 'styled-components';
import useSWR from 'swr';

import { MdEmail } from '@react-icons/all-files/md/MdEmail';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';

import Banner from '../src/components/Banner';
import { Main } from '../src/components/ui/Container';
import Featured from '../src/components/Featured';
import CurrentlyPlaying from '../src/components/CurrentlyPlaying';

interface HomeProps {
  posts: IBlogPostFields[];
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

const socials = [
  {
    name: 'Github',
    icon: <FaGithub />,
    href: 'https://github.com/vorsakha',
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/andreitf/',
  },
  {
    name: 'Email',
    icon: <MdEmail />,
    href: 'mailto:andreitf.dev@gmail.com',
  },
];

export default function Home({ posts }: HomeProps) {
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data: song } = useSWR('/api/spotify/current', fetcher);

  return (
    <Container>
      <Head>
        <title>TF</title>
        <meta name="description" content="Andrei T. Ferreira website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Banner socials={socials} />
        <Featured posts={posts} />
        <CurrentlyPlaying song={song} />
      </Main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const articles = (
    await ContentService.instance.getEntriesByType<IBlogPostFields>('blogPost')
  )
    .map(entry => entry.fields)
    .slice(0, 3);
  const stringifiedData = safeStringify(articles);
  const posts = JSON.parse(stringifiedData);

  return {
    props: {
      posts,
    },
  };
};
