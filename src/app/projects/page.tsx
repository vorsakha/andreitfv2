'use client';

import Link from 'next/link';
import Image from 'next/image';

import { ContainerWrapper } from '@ui/Container';
import { AltTitle } from '@ui/Title';
import { ACTIVE_PROJECTS } from '@constants/projects';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

const getOgImageUrl = (owner: string, repo: string): string =>
  `https://opengraph.githubassets.com/1/${owner}/${repo}`;

const PROJECTS_BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjE1IiBmaWxsPSIjRjVGNUY1IiBvcGFjaXR5PSIuNCIvPgo8L3N2Zz4K';

export default function ProjectsPage() {
  return (
    <ContainerWrapper>
      <AltTitle>Projects</AltTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACTIVE_PROJECTS.map(project => (
          <div
            key={project.slug}
            className="group rounded-md border border-[var(--color-gray-transparency)] overflow-hidden bg-[var(--theme-background)]"
          >
            <div className="relative w-full h-[180px]">
              <Image
                src={
                  project.imageUrl || getOgImageUrl(project.owner, project.repo)
                }
                alt={project.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                decoding="async"
                placeholder="blur"
                blurDataURL={PROJECTS_BLUR_DATA_URL}
                className={`object-cover w-full grayscale group-hover:grayscale-0 transition-all duration-300 ${project.imagePosition === 'top' ? 'object-top' : project.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'}`}
                priority
              />
            </div>
            <div className="p-4">
              <h3 className="text-[1.4rem] text-[var(--theme-text)] mb-2">
                {project.title}
              </h3>
              <p className="text-[var(--color-gray-solid)] mb-3">
                {project.summary}
              </p>
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
              <div className="flex items-center gap-4">
                <Link className="underline" href={`/projects/${project.slug}`}>
                  View details
                </Link>

                {!project.repoPrivate && (
                  <a
                    href={`https://github.com/${project.owner}/${project.repo}`}
                    aria-label={project.title}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-xl"
                    style={{
                      filter:
                        'drop-shadow(0px 2px 6px var(--color-gray-transparency))',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.filter =
                        'var(--drop-shadow-primary-light)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.filter =
                        'drop-shadow(0px 2px 6px var(--color-gray-transparency))';
                    }}
                  >
                    <FaGithub />
                  </a>
                )}

                {project.liveUrl ? (
                  <a
                    className="underline"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContainerWrapper>
  );
}
