import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Container, Main, Wrapper } from '@ui/Container';
import { AltTitle } from '@ui/Title';
import { getGistBySlug, getGists } from '@services/gists';

import { Description } from '@ui/Description';
import { Back } from '@ui/Button';
import { baseUrl } from '@constants/index';
import { CodeBlock } from '@components/Lib';

export interface GistsProps {
  gist: {
    title?: string;
    body?: string;
    url?: string;
    description?: string | null;
    language?: string;
  };
}

const Lib = ({ gist }: GistsProps) => {
  return (
    <Container>
      <Head>
        <title>TF | {gist.title}</title>
        <meta
          name="description"
          content={gist.description || 'Snippet details'}
        />
        <meta
          property="og:image"
          content={`${baseUrl}/api/og?title=${gist.title}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Wrapper>
          <Back href="/lib">Back</Back>
          <AltTitle>{gist.title}</AltTitle>
          <Description>{gist.description}</Description>

          <CodeBlock lang={gist?.language}>{gist?.body || ''}</CodeBlock>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default Lib;

export const getStaticProps: GetStaticProps<
  GistsProps,
  { slug: string }
> = async ctx => {
  const { slug } = ctx.params!;
  const gist = await getGistBySlug(slug);
  const file = Object.values(gist.files || {})[0];

  return {
    props: {
      gist: {
        title: file?.filename,
        url: gist.html_url,
        body: file?.content,
        description: gist.description,
        language: file?.language?.toLowerCase(),
      },
    },
    revalidate: 120,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const gists = await getGists();

  return {
    paths: gists.map(gist => ({
      params: {
        slug: gist.slug,
      },
    })),
    fallback: 'blocking',
  };
};
