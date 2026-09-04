import { createMcpHandler, McpServer } from '@modelcontextprotocol/server';
import * as z from 'zod/v4';

import { publicProfile } from '../../src/lib/public-profile/data';
import {
  selectPublicProfile,
  type PublicProfileView,
} from '../../src/lib/public-profile/selectors';
import type { Locale } from '../../src/lib/public-profile/schema';

const localeSchema = z.enum(['en', 'pt-BR']).optional();
const workKindSchema = z.enum(['coderockr', 'orca-v2', 'pi-native-subagents']);

const readOnlyAnnotations = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
} as const;

type ResourceDefinition = Readonly<{
  name: string;
  uri: string;
  title: string;
  description: string;
  payload: unknown;
}>;

function getCvPayload(profile: PublicProfileView) {
  return {
    locale: profile.locale,
    name: profile.name,
    role: profile.role,
    location: profile.location,
    summary: profile.summary,
    links: profile.links,
    employment: profile.employment,
    selectedWork: profile.selectedWork,
    project: profile.project,
    skills: profile.skills,
    education: profile.education,
    spokenLanguages: profile.spokenLanguages,
    cv: profile.cv,
  };
}

function getWorkPayload(locale: Locale, kind: z.infer<typeof workKindSchema>) {
  const profile = selectPublicProfile(locale);

  if (kind === 'coderockr') {
    return {
      locale,
      employment: profile.employment,
      selectedWork: profile.selectedWork,
    };
  }

  if (kind === 'orca-v2') {
    const work = profile.selectedWork.find(item => item.id === 'orca-v2');

    if (!work) {
      throw new Error('Orca V2 is missing from the public profile.');
    }

    return { locale, work };
  }

  return { locale, project: profile.project };
}

function createResources(): readonly ResourceDefinition[] {
  return (['en', 'pt-BR'] as const).flatMap(locale => {
    const profile = selectPublicProfile(locale);
    const localePath = locale === 'pt-BR' ? 'pt-br' : 'en';

    return [
      {
        name: `profile-${localePath}`,
        uri: `profile://andrei/${localePath}`,
        title: `${profile.name} public profile (${locale})`,
        description: `Approved public profile in ${locale}.`,
        payload: profile,
      },
      {
        name: `cv-${localePath}`,
        uri: `cv://andrei/${localePath}`,
        title: `${profile.name} CV (${locale})`,
        description: `Approved public CV PDF link in ${locale}.`,
        payload: getCvPayload(profile),
      },
      {
        name: `coderockr-${localePath}`,
        uri: `work://coderockr/${localePath}`,
        title: `Coderockr work (${locale})`,
        description: `Approved employment and selected work in ${locale}.`,
        payload: getWorkPayload(locale, 'coderockr'),
      },
      {
        name: `orca-v2-${localePath}`,
        uri: `work://orca-v2/${localePath}`,
        title: `Orca V2 (${locale})`,
        description: `Approved Orca V2 work summary in ${locale}.`,
        payload: getWorkPayload(locale, 'orca-v2'),
      },
      {
        name: `pi-native-subagents-${localePath}`,
        uri: `project://pi-native-subagents/${localePath}`,
        title: `${publicProfile.project.name} (${locale})`,
        description: `Approved open-source project summary in ${locale}.`,
        payload: getWorkPayload(locale, 'pi-native-subagents'),
      },
      ...profile.notes.map(note => ({
        name: `note-${note.slug}-${localePath}`,
        uri: `note://${note.slug}/${localePath}`,
        title: `${note.title} (${locale})`,
        description: note.summary,
        payload: note,
      })),
    ];
  });
}

function toToolResult(output: Record<string, unknown>) {
  return {
    content: [{ type: 'text' as const, text: JSON.stringify(output) }],
    structuredContent: { ...output },
  };
}

function createPublicProfileMcpServer() {
  const server = new McpServer(
    { name: 'andrei-public-profile', version: '1.0.0' },
    {
      instructions:
        'Read Andrei Ferreira public profile, CV, work, project and note information. This server has no write operations.',
    },
  );

  for (const resource of createResources()) {
    server.registerResource(
      resource.name,
      resource.uri,
      {
        title: resource.title,
        description: resource.description,
        mimeType: 'application/json',
      },
      async uri => ({
        contents: [
          {
            uri: uri.href,
            mimeType: 'application/json',
            text: JSON.stringify(resource.payload),
          },
        ],
      }),
    );
  }

  server.registerTool(
    'get_profile',
    {
      title: 'Get public profile',
      description: 'Return the approved public profile in one locale.',
      inputSchema: z.object({ locale: localeSchema }),
      annotations: readOnlyAnnotations,
    },
    async ({ locale }) => {
      const output = { ...selectPublicProfile(locale ?? 'en') };
      return toToolResult(output);
    },
  );

  server.registerTool(
    'get_cv',
    {
      title: 'Get public CV',
      description: 'Return the approved public CV PDF link.',
      inputSchema: z.object({ locale: localeSchema }),
      annotations: readOnlyAnnotations,
    },
    async ({ locale }) => {
      const output = { ...getCvPayload(selectPublicProfile(locale ?? 'en')) };
      return toToolResult(output);
    },
  );

  server.registerTool(
    'get_work',
    {
      title: 'Get public work',
      description: 'Return approved Coderockr, Orca V2 or Pi project data.',
      inputSchema: z.object({
        locale: localeSchema,
        kind: workKindSchema,
      }),
      annotations: readOnlyAnnotations,
    },
    async ({ locale, kind }) => {
      const output = { ...getWorkPayload(locale ?? 'en', kind) };
      return toToolResult(output);
    },
  );

  return server;
}

const mcpHandler = createMcpHandler(createPublicProfileMcpServer);

export function handleMcpRequest(request: Request): Promise<Response> {
  return mcpHandler.fetch(request);
}

export default handleMcpRequest;

export const config = {
  path: '/mcp',
} as const;
