export const locales = ['en', 'pt-BR'] as const;

export type Locale = (typeof locales)[number];

export type Localized<T> = Readonly<Record<Locale, T>>;

export type YearRange = Readonly<{
  startYear: number;
  endYear: number | null;
  current: boolean;
}>;

export type PublicLink = Readonly<{
  id: 'github' | 'linkedin' | 'email' | 'cv';
  label: Localized<string>;
  href: string;
  external: boolean;
}>;

export type PublicWorkItem = Readonly<{
  id: 'geospatial-systems' | 'contract-management' | 'orca-v2';
  title: Localized<string>;
  description: Localized<string>;
  details: Localized<readonly string[]>;
  period: YearRange | null;
}>;

export type SkillGroup = Readonly<{
  id: 'languages' | 'frontend' | 'backend-data' | 'quality-tooling';
  label: Localized<string>;
  items: Localized<readonly string[]>;
}>;

export type EducationItem = Readonly<{
  id: 'computer-science' | 'english-certificate';
  qualification: Localized<string>;
  institution: string;
  detail: Localized<string>;
  year: number;
}>;

export type PublicNote = Readonly<{
  slug:
    | 'complexity-should-earn-its-place'
    | 'agents-should-ask-instead-of-guessing';
  title: Localized<string>;
  summary: Localized<string>;
  body: Localized<readonly string[]>;
}>;

export type LocalizedSiteCopy = Readonly<{
  eyebrow: string;
  headline: readonly string[];
  summary: readonly [string, string];
  navigation: Readonly<{
    work: string;
    notes: string;
    about: string;
    cv: string;
  }>;
  sections: Readonly<{
    building: string;
    selectedWork: string;
    notes: string;
  }>;
}>;

export type BilingualPublicProfile = Readonly<{
  identity: Readonly<{
    name: string;
    siteUrl: string;
    email: string;
    location: Localized<string>;
    role: Localized<string>;
    shortSummary: Localized<string>;
  }>;
  links: readonly PublicLink[];
  employment: Readonly<{
    organization: 'Coderockr';
    role: Localized<string>;
    period: YearRange;
  }>;
  work: readonly PublicWorkItem[];
  project: Readonly<{
    id: 'pi-native-subagents';
    name: 'Pi Native Subagents';
    url: string;
    license: 'MIT';
    status: Localized<string>;
    period: YearRange;
    description: Localized<string>;
    technicalLine: Localized<string>;
  }>;
  skills: readonly SkillGroup[];
  education: readonly EducationItem[];
  spokenLanguages: Localized<readonly string[]>;
  notes: readonly PublicNote[];
  copy: Localized<LocalizedSiteCopy>;
}>;
