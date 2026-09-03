import type { Metadata } from 'next';
import Link from 'next/link';

import { BuildingFlow } from '@/components/building-flow';
import { ResolvingLine } from '@/components/resolving-line';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { publicProfile } from '@/lib/public-profile/data';
import { formatYearRange } from '@/lib/public-profile/selectors';
import {
  getProfilePageJsonLd,
  serializeJsonLd,
} from '@/lib/public-profile/json-ld';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const locale = 'en';

export default function HomePage() {
  const copy = publicProfile.copy[locale];
  const project = publicProfile.project;
  const projectRange = formatYearRange(project.period, locale);
  const employerRange = formatYearRange(
    publicProfile.employment.period,
    locale,
  );
  const socialLinks = publicProfile.links.filter(link => link.id !== 'cv');

  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="hero" id="about" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 id="hero-heading">
              {copy.headline.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < copy.headline.length - 1 ? ' ' : null}
                </span>
              ))}
            </h1>
            <p className="hero-summary">
              {copy.summary.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < copy.summary.length - 1 ? ' ' : null}
                </span>
              ))}
            </p>
            <nav className="hero-links" aria-label="Contact and social links">
              {socialLinks.map(link => (
                <a key={link.id} href={link.href}>
                  {link.label[locale]}
                </a>
              ))}
            </nav>
          </div>
          <ResolvingLine />
        </section>

        <section
          className="building-section"
          aria-labelledby="building-heading"
        >
          <h2 className="section-label" id="building-heading">
            {copy.sections.building}
          </h2>
          <a
            className="building-content"
            href={project.url}
            aria-label={`${project.name} on GitHub`}
          >
            <div className="building-copy">
              <h3>{project.name}</h3>
              <p className="building-status">
                {project.status[locale]} · {project.license} · {projectRange}
              </p>
              <p className="building-description">
                {project.description[locale]}
              </p>
              <p className="technical-line">{project.technicalLine[locale]}</p>
            </div>
            <BuildingFlow />
            <span className="row-arrow building-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </section>

        <section
          className="work-section"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="section-heading-line">
            <h2 className="section-label" id="work-heading">
              {copy.sections.selectedWork}
            </h2>
            <p className="employer-line">
              {publicProfile.employment.organization} · {employerRange}
            </p>
          </div>
          <div className="work-list">
            {publicProfile.work.map(work => (
              <Link
                className="work-row"
                href={`/work#${work.id}`}
                key={work.id}
                aria-label={`${work.title[locale]} details`}
              >
                <h3>{work.title[locale]}</h3>
                <p>{work.description[locale]}</p>
                <span className="work-date">
                  {work.period ? formatYearRange(work.period, locale) : ''}
                </span>
                <span className="row-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="notes-section"
          id="notes"
          aria-labelledby="notes-heading"
        >
          <h2 className="section-label" id="notes-heading">
            {copy.sections.notes}
          </h2>
          <div className="notes-list">
            {publicProfile.notes.map(note => (
              <Link
                className="note-row"
                href={`/notes/${note.slug}`}
                key={note.slug}
              >
                <span className="note-title">{note.title[locale]}</span>
                <span className="row-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(getProfilePageJsonLd()),
        }}
      />
    </div>
  );
}
