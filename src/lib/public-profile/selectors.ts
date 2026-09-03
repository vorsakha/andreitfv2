import { publicProfile } from './data';
import type { Locale, PublicNote, YearRange } from './schema';

export function formatYearRange(range: YearRange, locale: Locale): string {
  const end = range.current
    ? locale === 'pt-BR'
      ? 'atual'
      : 'now'
    : range.endYear;

  return `${range.startYear}–${end}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return new URL(path, publicProfile.identity.siteUrl).toString();
}

export function getCvPdfPath(locale: Locale): string {
  return locale === 'pt-BR' ? '/cv/CV_PT.pdf' : '/cv/CV_EN.pdf';
}

export function getNote(slug: string): PublicNote | undefined {
  return publicProfile.notes.find(note => note.slug === slug);
}

export function selectPublicLinks(locale: Locale) {
  return publicProfile.links.map(link => ({
    id: link.id,
    label: link.label[locale],
    href: link.id === 'cv' ? getCvPdfPath(locale) : link.href,
    external: link.external,
  }));
}

export function selectPublicProfile(locale: Locale) {
  return {
    locale,
    canonicalUrl: publicProfile.identity.siteUrl,
    name: publicProfile.identity.name,
    role: publicProfile.identity.role[locale],
    location: publicProfile.identity.location[locale],
    summary: publicProfile.identity.shortSummary[locale],
    links: selectPublicLinks(locale).map(link => ({
      id: link.id,
      label: link.label,
      href: absoluteUrl(link.href),
    })),
    employment: {
      organization: publicProfile.employment.organization,
      role: publicProfile.employment.role[locale],
      period: { ...publicProfile.employment.period },
      range: formatYearRange(publicProfile.employment.period, locale),
    },
    selectedWork: publicProfile.work.map(work => ({
      id: work.id,
      title: work.title[locale],
      description: work.description[locale],
      details: [...work.details[locale]],
      period: work.period ? { ...work.period } : null,
      range: work.period ? formatYearRange(work.period, locale) : null,
      url: absoluteUrl(`/work#${work.id}`),
    })),
    project: {
      id: publicProfile.project.id,
      name: publicProfile.project.name,
      url: publicProfile.project.url,
      license: publicProfile.project.license,
      status: publicProfile.project.status[locale],
      period: { ...publicProfile.project.period },
      range: formatYearRange(publicProfile.project.period, locale),
      description: publicProfile.project.description[locale],
      technicalLine: publicProfile.project.technicalLine[locale],
    },
    skills: publicProfile.skills.map(group => ({
      id: group.id,
      label: group.label[locale],
      items: [...group.items[locale]],
    })),
    education: publicProfile.education.map(item => ({
      id: item.id,
      qualification: item.qualification[locale],
      institution: item.institution,
      detail: item.detail[locale],
      year: item.year,
    })),
    spokenLanguages: [...publicProfile.spokenLanguages[locale]],
    notes: publicProfile.notes.map(note => ({
      slug: note.slug,
      title: note.title[locale],
      summary: note.summary[locale],
      body: [...note.body[locale]],
      url: absoluteUrl(`/notes/${note.slug}`),
    })),
    cv: {
      pdfUrl: absoluteUrl(getCvPdfPath(locale)),
    },
  };
}

export type PublicProfileView = ReturnType<typeof selectPublicProfile>;

export function selectBilingualPublicProfiles() {
  return {
    schemaVersion: 1,
    canonicalUrl: publicProfile.identity.siteUrl,
    profiles: {
      en: selectPublicProfile('en'),
      'pt-BR': selectPublicProfile('pt-BR'),
    },
  };
}

export function selectCommandLinks(locale: Locale) {
  const navigation = publicProfile.copy[locale].navigation;

  return [
    { label: navigation.work, href: '/work' },
    { label: navigation.notes, href: '/#notes' },
    { label: navigation.about, href: '/#about' },
    { label: `${navigation.cv} · English`, href: getCvPdfPath('en') },
    {
      label: `${navigation.cv} · Português`,
      href: getCvPdfPath('pt-BR'),
    },
    { label: 'profile.json', href: '/profile.json' },
    { label: 'llms.txt', href: '/llms.txt' },
  ] as const;
}
