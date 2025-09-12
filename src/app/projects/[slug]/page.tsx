import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { ContainerWrapper } from '@ui/Container';
import { AltTitle, Title } from '@ui/Title';
import GithubService from '@services/github';
import { PROJECTS, ACTIVE_PROJECTS, BLUR_DATA_URL } from '@constants/projects';
import { parseReadme } from '@services/github/readmeParser';
import type { ParsedReadme } from '@services/github/models';
import { Back } from '@/components/ui/Button';
import { ROUTES } from '@/interfaces/routes';
import { getBase64Image } from '@/utils/image';

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = ACTIVE_PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const imageUrl =
    project.imageUrl && baseUrl
      ? `${baseUrl}${project.imageUrl}`
      : `https://opengraph.githubassets.com/1/${project.owner}/${project.repo}`;

  return {
    title: `${project.title} | TF`,
    description: project.summary,
    keywords: project.highlights,
    authors: [{ name: 'Andrei Ferreira' }],
    creator: 'Andrei Ferreira',
    publisher: 'Andrei Ferreira',
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${baseUrl}/projects/${project.slug}`,
      siteName: 'TF',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.imageAlt,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [imageUrl],
      creator: '@vorsakha',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

const getOgImageUrl = (owner: string, repo: string): string =>
  `https://opengraph.githubassets.com/1/${owner}/${repo}`;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = ACTIVE_PROJECTS.find(p => p.slug === slug);
  if (!project) return notFound();

  type MinimalRepo = { homepage?: string | null };

  let repo: MinimalRepo;
  let readme: string | null = null;
  let parsed: ParsedReadme = {} as ParsedReadme;
  let blurDataURL: string;

  if (project.repoPrivate) {
    repo = {
      homepage: project.repoFallback?.homepage ?? null,
    };
    parsed = {};
    blurDataURL = await getBase64Image(
      getOgImageUrl(project.owner, project.repo),
    ).catch(() => BLUR_DATA_URL);
  } else {
    repo = await GithubService.getRepo(project.owner, project.repo);
    readme = await GithubService.getReadmeMarkdown(project.owner, project.repo);
    parsed = readme ? parseReadme(readme) : ({} as ParsedReadme);

    const imageUrl =
      project.imageUrl || getOgImageUrl(project.owner, project.repo);
    blurDataURL = imageUrl.startsWith('/')
      ? await getBase64Image(
          `${process.env.NEXT_PUBLIC_BASE_URL || ''}${imageUrl}`,
        ).catch(() => BLUR_DATA_URL)
      : await getBase64Image(imageUrl).catch(() => BLUR_DATA_URL);
  }

  return (
    <ContainerWrapper>
      <div className="h-[350px] max-w-[900px] w-full mx-auto relative md:h-[300px] max-[480px]:h-[250px] mb-4">
        <Image
          src={project.imageUrl || getOgImageUrl(project.owner, project.repo)}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          priority
          loading="eager"
          quality={85}
          decoding="async"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className={`rounded-lg object-cover w-full shadow-md ${project.imagePosition === 'top' ? 'object-top' : project.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'}`}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.highlights.map(h => (
          <span
            key={h}
            className="text-xs px-2 py-1 rounded bg-[var(--color-gray-transparency)] text-[var(--theme-text)]"
          >
            {h}
          </span>
        ))}
      </div>

      <Back href={ROUTES.PROJECTS}>Back</Back>

      <AltTitle>{project.title}</AltTitle>

      {project.overview || parsed.overview ? (
        <div className="mb-6">
          <Title>Overview</Title>
          <div className="mt-2">
            <ReactMarkdown>
              {project.overview || parsed.overview || ''}
            </ReactMarkdown>
          </div>
        </div>
      ) : null}

      {(project.keyFeatures && project.keyFeatures.length) ||
      (parsed.features && parsed.features.length) ? (
        <div className="mb-6">
          <Title>Key features</Title>
          <ul className="mt-2 list-disc pl-5">
            {(project.keyFeatures || parsed.features || []).map(item => (
              <li key={item}>
                <ReactMarkdown>{item}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {parsed.techStack && parsed.techStack.length ? (
        <div className="mb-6">
          <Title>Tech stack</Title>
          <div className="flex flex-wrap gap-2 mt-2">
            {parsed.techStack.map(t => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded bg-[var(--color-gray-transparency)] text-[var(--theme-text)]"
              >
                <ReactMarkdown>{t}</ReactMarkdown>
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {parsed.deployments && parsed.deployments.length ? (
        <div className="mb-6">
          <Title>Deployments</Title>
          <ul className="mt-2 list-disc pl-5">
            {parsed.deployments.map(item => (
              <li key={item}>
                <ReactMarkdown>{item}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mb-8">
        {(!project.repoPrivate || repo.homepage) && <Title>Links</Title>}
        <div className="flex gap-4 mt-2 flex-wrap">
          {!project.repoPrivate && (
            <a
              className="underline"
              href={`https://github.com/${project.owner}/${project.repo}`}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          )}
          {repo.homepage ? (
            <a
              className="underline"
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          ) : null}
        </div>
      </div>
    </ContainerWrapper>
  );
}
