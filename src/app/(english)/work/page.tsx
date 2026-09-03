import Link from 'next/link';

import { createRouteMetadata } from '@/app/site-config';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { publicProfile } from '@/lib/public-profile/data';
import { formatYearRange } from '@/lib/public-profile/selectors';

export const metadata = createRouteMetadata({
  pathname: '/work',
  title: 'Selected work',
  description: `Selected work by ${publicProfile.identity.name} at Coderockr.`,
});

export default function WorkPage() {
  const locale = 'en';
  const employerRange = formatYearRange(
    publicProfile.employment.period,
    locale,
  );

  return (
    <div className="page-shell work-page">
      <SiteHeader />
      <main>
        <article className="work-article">
          <header className="work-intro">
            <p className="eyebrow">
              {publicProfile.employment.organization} · {employerRange}
            </p>
            <h1>Selected work</h1>
            <p className="work-lede">
              Three contributions from my work at Coderockr, covering geospatial
              interfaces, document workflows and budgeting software.
            </p>
          </header>

          <div className="work-details">
            {publicProfile.work.map(work => (
              <section
                className="work-detail"
                id={work.id}
                key={work.id}
                aria-labelledby={`${work.id}-heading`}
              >
                <header className="work-detail-heading">
                  <div>
                    <h2 id={`${work.id}-heading`}>{work.title[locale]}</h2>
                    <p>{work.description[locale]}</p>
                  </div>
                  {work.period ? (
                    <p className="work-detail-date">
                      {formatYearRange(work.period, locale)}
                    </p>
                  ) : null}
                </header>
                <ul className="work-detail-points">
                  {work.details[locale].map(detail => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <Link className="back-link" href="/#work">
            Back to the homepage
          </Link>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
