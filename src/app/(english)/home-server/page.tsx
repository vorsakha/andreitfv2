import { createRouteMetadata } from '@/app/site-config';
import { HomeServerTopology } from '@/components/home-server-topology';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { publicProfile } from '@/lib/public-profile/data';

const locale = 'en';
const homeServer = publicProfile.homeServer;

export const metadata = createRouteMetadata({
  pathname: homeServer.path,
  title: homeServer.label.en,
  description: homeServer.metaDescription.en,
});

export default function HomeServerPage() {
  const toolingHeadingId = 'tooling-heading';
  const principlesHeadingId = 'principles-heading';
  const outcomeHeadingId = 'outcome-heading';

  return (
    <div className="page-shell home-server-page">
      <SiteHeader activePath={homeServer.path} />
      <main>
        <article>
          <header className="home-server-hero">
            <div className="home-server-hero__copy">
              <p className="eyebrow">{homeServer.label[locale]}</p>
              <h1 id="home-server-heading">{homeServer.headline[locale]}</h1>
              <p className="home-server-hero__intro">
                {homeServer.intro[locale]}
              </p>
            </div>
            <HomeServerTopology
              title={homeServer.topology.title[locale]}
              description={homeServer.topology.description[locale]}
              nodes={{
                archWorkhorse: {
                  name: homeServer.topology.nodes.archWorkhorse.name,
                  role: homeServer.topology.nodes.archWorkhorse.role[locale],
                },
                macbook: {
                  name: homeServer.topology.nodes.macbook.name,
                  role: homeServer.topology.nodes.macbook.role[locale],
                },
                ubuntuServer: {
                  name: homeServer.topology.nodes.ubuntuServer.name,
                  role: homeServer.topology.nodes.ubuntuServer.role[locale],
                },
                apiModels: {
                  name: homeServer.topology.nodes.apiModels.name[locale],
                  role: homeServer.topology.nodes.apiModels.role[locale],
                },
              }}
            />
          </header>

          {homeServer.servers.map(server => {
            const headingId = `${server.id}-server-heading`;

            return (
              <section
                className="home-server-band"
                aria-labelledby={headingId}
                key={server.id}
              >
                <h2 className="home-server-section-title" id={headingId}>
                  <span className="home-server-section-name">
                    {server.title[locale]}
                  </span>
                </h2>
                <div className="home-server-machine">
                  <div className="home-server-machine__story">
                    {server.story[locale].map(paragraph => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <dl className="home-server-specs">
                    {server.specs.map(spec => (
                      <div className="home-server-specs__row" key={spec.id}>
                        <dt>{spec.label[locale]}</dt>
                        <dd>
                          <span className="home-server-specs__value">
                            {spec.value[locale]}
                          </span>
                          <span className="home-server-specs__description">
                            {spec.description[locale]}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>
            );
          })}

          <section
            className="home-server-band"
            aria-labelledby={toolingHeadingId}
          >
            <h2 className="home-server-section-title" id={toolingHeadingId}>
              <span className="home-server-section-name">
                {homeServer.tooling.title[locale]}
              </span>
            </h2>
            <div className="home-server-tool-groups">
              {homeServer.tooling.groups.map(group => (
                <section className="home-server-tool-group" key={group.id}>
                  <h3>{group.title[locale]}</h3>
                  <ul>
                    {group.tools.map(tool => (
                      <li key={tool.id}>
                        <p className="home-server-tooling__name">{tool.name}</p>
                        <p className="home-server-tooling__description">
                          {tool.description[locale]}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section
            className="home-server-band"
            aria-labelledby={principlesHeadingId}
          >
            <h2 className="home-server-section-title" id={principlesHeadingId}>
              <span className="home-server-section-name">
                {homeServer.principles.title[locale]}
              </span>
            </h2>
            <ul className="home-server-principles">
              {homeServer.principles.items.map(item => (
                <li className="home-server-principles__item" key={item.id}>
                  <p className="home-server-principles__title">
                    {item.title[locale]}
                  </p>
                  <p className="home-server-principles__description">
                    {item.description[locale]}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="home-server-band home-server-band--last home-server-outcome"
            aria-labelledby={outcomeHeadingId}
          >
            <h2 className="home-server-section-title" id={outcomeHeadingId}>
              <span className="home-server-section-name">
                {homeServer.outcome.title[locale]}
              </span>
            </h2>
            <div className="home-server-outcome__content">
              {homeServer.outcome.description[locale].map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <p className="home-server-reviewed">
            {homeServer.lastReviewed.label[locale]}
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
