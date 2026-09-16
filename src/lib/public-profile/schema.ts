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
    homeServer: string;
    cv: string;
  }>;
  sections: Readonly<{
    building: string;
    selectedWork: string;
    notes: string;
  }>;
}>;

export type HomeServerSpec = Readonly<{
  id: 'cpu' | 'memory' | 'storage' | 'gpu' | 'os' | 'access';
  label: Localized<string>;
  value: Localized<string>;
  description: Localized<string>;
}>;

export type HomeServerMachine = Readonly<{
  id: 'ubuntu' | 'arch';
  title: Localized<string>;
  story: Localized<readonly [string, string]>;
  specs: readonly HomeServerSpec[];
}>;

export type HomeServerTool = Readonly<{
  id: 'hermes-agent' | 'bb' | 'tailscale' | 'wake-on-lan' | 'ark' | 'mcp';
  name: string;
  description: Localized<string>;
}>;

export type HomeServerToolGroup = Readonly<{
  id: 'runtime' | 'fleet-control' | 'knowledge';
  title: Localized<string>;
  tools: readonly HomeServerTool[];
}>;

export type HomeServerPrinciple = Readonly<{
  id:
    | 'private-by-default'
    | 'resource-limits'
    | 'measured-upgrades'
    | 'reversible-systems';
  title: Localized<string>;
  description: Localized<string>;
}>;

export type HomeServerPage = Readonly<{
  path: '/home-server';
  lastReviewed: Readonly<{
    year: 2026;
    month: 9;
    label: Localized<string>;
  }>;
  label: Localized<string>;
  headline: Localized<string>;
  intro: Localized<string>;
  topology: Readonly<{
    title: Localized<string>;
    description: Localized<string>;
    nodes: Readonly<{
      archWorkhorse: Readonly<{
        name: 'Arch workhorse';
        role: Localized<string>;
      }>;
      macbook: Readonly<{
        name: 'MacBook';
        role: Localized<string>;
      }>;
      ubuntuServer: Readonly<{
        name: 'Ubuntu server';
        role: Localized<string>;
      }>;
      apiModels: Readonly<{
        name: Localized<string>;
        role: Localized<string>;
      }>;
    }>;
  }>;
  servers: readonly [HomeServerMachine, HomeServerMachine];
  tooling: Readonly<{
    title: Localized<string>;
    groups: readonly HomeServerToolGroup[];
  }>;
  principles: Readonly<{
    title: Localized<string>;
    items: readonly HomeServerPrinciple[];
  }>;
  outcome: Readonly<{
    title: Localized<string>;
    description: Localized<readonly [string, string]>;
  }>;
  metaDescription: Localized<string>;
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
  homeServer: HomeServerPage;
  copy: Localized<LocalizedSiteCopy>;
}>;
