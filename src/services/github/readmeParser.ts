import { ParsedReadme } from './models';

const SECTION_HEADERS = [
  'overview',
  'introduction',
  'about',
  'features',
  'tech stack',
  'technology',
  'stack',
  'contracts',
  'deployment',
  'deployments',
  'links',
  'usage',
  'how it works',
];

export function parseReadme(markdown: string): ParsedReadme {
  const lines = markdown.split('\n');
  const sections: Record<string, string[]> = {};
  let current: string | null = null;

  for (const raw of lines) {
    const line = raw.trim();
    const headerMatch = /^(#{1,6})\s+(.+)$/.exec(line);
    if (headerMatch) {
      const header = headerMatch[2].toLowerCase().trim();
      const key = SECTION_HEADERS.find(s => header.includes(s));
      current = key || null;
      if (current && !sections[current]) sections[current] = [];
      continue;
    }
    if (current) {
      sections[current].push(raw);
    }
  }

  const normalizeList = (block?: string[]): string[] | undefined => {
    if (!block) return undefined;
    const items = block
      .map(l => l.trim())
      .filter(Boolean)
      .filter(l => l.startsWith('- ') || l.startsWith('* '))
      .map(l => l.replace(/^[-*]\s+/, '').trim());
    return items.length ? items : undefined;
  };

  const toParagraph = (block?: string[]): string | undefined => {
    if (!block) return undefined;
    const text = block
      .join('\n')
      .replace(/\n{2,}/g, '\n')
      .trim();
    return text || undefined;
  };

  const overview = toParagraph(
    sections['overview'] ||
      sections['introduction'] ||
      sections['about'] ||
      sections['how it works'],
  );

  const features = normalizeList(sections['features']);
  const techStack = normalizeList(
    sections['tech stack'] || sections['technology'] || sections['stack'],
  );
  const contracts = normalizeList(sections['contracts']);
  const deployments = normalizeList(
    sections['deployment'] || sections['deployments'],
  );
  const links = normalizeList(sections['links'])?.map(item => {
    const match = /\[(.*?)\]\((.*?)\)/.exec(item);
    if (match) return { label: match[1], href: match[2] };
    const parts = item.split(/\s+-\s+|:\s+/);
    const href = (item.match(/https?:\/\/\S+/) || [])[0];
    const label = parts[0] || href || item;
    return href ? { label, href } : { label: item, href: '#' };
  });

  return {
    overview,
    features,
    techStack,
    contracts,
    deployments,
    links,
  };
}
