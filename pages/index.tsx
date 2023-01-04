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
import CurrentlyPlaying from '../src/components/CurrentlyPlaying';
import { AltTitle } from '../src/components/ui/Title';
import List from '../src/components/List';
import { Spinner } from '../src/components/ui/Spinner';
import { getBase64Image } from '../src/utils/image';
import { baseUrl } from '../src/constants';

interface Posts extends IBlogPostFields {
  placeholderImage: string;
  subtitle: string;
  image: string;
}

interface HomeProps {
  posts: Posts[];
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

const LoadingWrapper = styled.div`
  height: 176.2px;
  position: relative;
  width: 200px;
  margin: 24px 0;
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
  const { data: song, isLoading } = useSWR('/api/spotify/current', fetcher);

  return (
    <Container>
      <Head>
        <title>TF</title>
        <meta name="description" content="Andrei T. Ferreira's website" />
        <meta
          property="og:image"
          content={`${baseUrl}/api/og?title=Andrei T. Ferreira's website`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Banner socials={socials} />
        <div>
          <AltTitle>Featured Posts</AltTitle>
          <List items={posts} grayscaleImage linkToSelf />
        </div>
        {isLoading ? (
          <LoadingWrapper>
            <Spinner />
          </LoadingWrapper>
        ) : (
          <CurrentlyPlaying song={song} />
        )}
      </Main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const articles = (
    await ContentService.instance.getEntriesByType<IBlogPostFields>('blogPost')
  )
    .map(entry => ({
      title: entry.fields.title,
      subtitle: entry.fields.description,
      image: `https:${entry.fields.heroImage.fields.file.url}?w=120&h=68`,
      url: `/blog/${entry.fields.slug}`,
    }))
    .slice(0, 3);
  const stringifiedData = safeStringify(
    await Promise.all(
      articles.map(async p => ({
        ...p,
        placeholderImage: await getBase64Image(p.image),
      })),
    ),
  );
  const posts = JSON.parse(stringifiedData);

  return {
    props: {
      posts,
    },
  };
};
