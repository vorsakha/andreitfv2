import { CodeBlock } from '@components/Lib';
import { Back } from '@ui/Button';
import { Container, ContainerWrapper } from '@ui/Container';
import { Description } from '@ui/Description';
import { AltTitle } from '@ui/Title';
import GistService from '@services/gist';
import { baseUrl } from '@/constants';
import { ROUTES } from '@interfaces/routes';

export async function generateStaticParams() {
  const gists = await GistService.getGists();

  return gists.map(gist => ({
    slug: gist.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const gist = await GistService.getGistBySlug(slug);

  return {
    title: `TF | ${gist.title}`,
    description: gist.description,
    openGraph: {
      images: [`${baseUrl}/api/og?title=${gist.title}`],
    },
  };
}

export default async function Lib({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const gist = await GistService.getGistBySlug(slug);

  return (
    <Container>
      <ContainerWrapper>
        <Back href={ROUTES.LIB}>Back</Back>
        <AltTitle>{gist.title}</AltTitle>
        <Description>{gist.description}</Description>

        <CodeBlock lang={gist?.language}>{gist?.body || ''}</CodeBlock>
      </ContainerWrapper>
    </Container>
  );
}
