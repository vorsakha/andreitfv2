import Head from 'next/head';

import { CodeBlock } from '@components/Lib';
import { Back } from '@ui/Button';
import { Container, ContainerWrapper, Wrapper } from '@ui/Container';
import { Description } from '@ui/Description';
import { AltTitle } from '@ui/Title';
import GistService from '@services/gist';
import { baseUrl } from '@/constants';

export async function generateStaticParams() {
  const gists = await GistService.getGists();

  return gists.map(gist => ({
    slug: gist.slug,
  }));
}

export default async function Lib({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const gist = await GistService.getGistBySlug(slug);

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

      <ContainerWrapper>
        <Wrapper>
          <Back href="/lib">Back</Back>
          <AltTitle>{gist.title}</AltTitle>
          <Description>{gist.description}</Description>

          <CodeBlock lang={gist?.language}>{gist?.body || ''}</CodeBlock>
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
}
