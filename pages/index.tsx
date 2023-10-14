import { GetStaticProps } from 'next';
import Head from 'next/head';
import safeStringify from 'fast-safe-stringify';
import styled from 'styled-components';

import { MdEmail } from '@react-icons/all-files/md/MdEmail';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';

import { IBlogPostFields } from '@/@types/contentful';
import ContentService from '@services/content';

import Banner from '@components/Banner';
import { Main } from '@components/ui/Container';
import { AltTitle } from '@components/ui/Title';
import List from '@components/List';
import { getBase64Image } from '@utils/image';
import { baseUrl } from '@constants/index';

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
      </Main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const articles = await ContentService.instance.getEntriesByType();

  const formatted = articles.items
    .map((entry: any) => ({
      title: entry.fields.title,
      subtitle: entry.fields.description,
      image: `https:${entry.fields.heroImage.fields.file.url}?w=120&h=68`,
      url: `/blog/${entry.fields.slug}`,
    }))
    .slice(0, 3);
  const stringifiedData = safeStringify(
    await Promise.all(
      formatted.map(async p => ({
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
