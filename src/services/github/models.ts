export interface GithubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  htmlUrl: string;
  homepage?: string;
  stargazersCount: number;
  forksCount: number;
  openIssuesCount: number;
  topics: string[];
  language?: string;
  license?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ParsedReadme {
  overview?: string;
  features?: string[];
  techStack?: string[];
  deployments?: string[];
  contracts?: string[];
  links?: { label: string; href: string }[];
}
