import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Container, Main, Wrapper } from '../../src/components/ui/Container';
import { AltTitle } from '../../src/components/ui/Title';
import { getGistBySlug, getGists } from '../../src/services/gists';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import styled from 'styled-components';
import { Description } from '../../src/components/ui/Description';
import { Back } from '../../src/components/ui/Button';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);

export interface GistsProps {
  gist: {
    title?: string;
    body?: string;
    url?: string;
    description?: string | null;
    language?: string;
  };
}

const CodeWrapper = styled.div`
  margin: 1rem 0;
`;

const Lib = ({ gist }: GistsProps) => {
  return (
    <Container>
      <Head>
        <title>TF | {gist.title}</title>
        <meta
          name="description"
          content={gist.description || 'Snippet details'}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Wrapper>
          <Back href="/lib">Back</Back>
          <AltTitle>{gist.title}</AltTitle>
          <Description>{gist.description}</Description>

          <CodeWrapper>
            <SyntaxHighlighter
              style={xonokai as any}
              language={gist.language}
              PreTag="div"
              className="codeStyle"
              wrapLines
              useInlineStyles
            >
              {gist?.body || ''}
            </SyntaxHighlighter>
          </CodeWrapper>
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
