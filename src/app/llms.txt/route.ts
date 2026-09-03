import { publicProfile } from '@/lib/public-profile/data';
import {
  absoluteUrl,
  formatYearRange,
  getCvPdfPath,
} from '@/lib/public-profile/selectors';

export const dynamic = 'force-static';

export function GET() {
  const project = publicProfile.project;
  const lines = [
    `# ${publicProfile.identity.name}`,
    '',
    publicProfile.identity.role.en,
    publicProfile.identity.shortSummary.en,
    '',
    '## Current work',
    '',
    `- ${publicProfile.employment.organization}: ${formatYearRange(publicProfile.employment.period, 'en')}`,
    `- ${project.name}: ${formatYearRange(project.period, 'en')}, ${project.status.en}, ${project.license}`,
    `- ${project.description.en}`,
    '',
    '## Selected work',
    '',
    ...publicProfile.work.flatMap(work => {
      const range = work.period
        ? `, ${formatYearRange(work.period, 'en')}`
        : '';

      return [
        `- [${work.title.en}](${absoluteUrl(`/work#${work.id}`)})${range}: ${work.description.en}`,
        ...work.details.en.map(detail => `  - ${detail}`),
      ];
    }),
    '',
    '## Notes',
    '',
    ...publicProfile.notes.map(
      note =>
        `- [${note.title.en}](${absoluteUrl(`/notes/${note.slug}`)}): ${note.summary.en}`,
    ),
    '',
    '## Public links',
    '',
    `- [Homepage](${publicProfile.identity.siteUrl})`,
    `- [Selected work](${absoluteUrl('/work')})`,
    `- [English CV PDF](${absoluteUrl(getCvPdfPath('en'))})`,
    `- [PDF do currículo em português](${absoluteUrl(getCvPdfPath('pt-BR'))})`,
    `- [Public profile JSON](${absoluteUrl('/profile.json')})`,
    `- [MCP endpoint](${absoluteUrl('/mcp')})`,
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
