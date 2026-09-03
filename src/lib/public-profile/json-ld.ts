import { publicProfile } from './data';
import { absoluteUrl } from './selectors';

export function getProfilePageJsonLd() {
  const github = publicProfile.links.find(link => link.id === 'github');
  const linkedin = publicProfile.links.find(link => link.id === 'linkedin');

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${publicProfile.identity.siteUrl}/#profile-page`,
    url: publicProfile.identity.siteUrl,
    name: `${publicProfile.identity.name} · ${publicProfile.identity.role.en}`,
    description: publicProfile.identity.shortSummary.en,
    inLanguage: 'en',
    mainEntity: {
      '@type': 'Person',
      '@id': `${publicProfile.identity.siteUrl}/#andrei-ferreira`,
      name: publicProfile.identity.name,
      jobTitle: publicProfile.identity.role.en,
      description: publicProfile.identity.shortSummary.en,
      email: `mailto:${publicProfile.identity.email}`,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BR',
      },
      worksFor: {
        '@type': 'Organization',
        name: publicProfile.employment.organization,
      },
      sameAs: [github?.href, linkedin?.href].filter(href => href !== undefined),
      url: absoluteUrl('/'),
    },
  } as const;
}

export function serializeJsonLd(
  value: ReturnType<typeof getProfilePageJsonLd>,
) {
  return JSON.stringify(value).replaceAll('<', '\\u003c');
}
