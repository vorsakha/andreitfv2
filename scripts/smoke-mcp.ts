import assert from 'node:assert/strict';

import {
  Client,
  StreamableHTTPClientTransport,
} from '@modelcontextprotocol/client';
import * as z from 'zod/v4';

import { closeMcpHandler, handleMcpRequest } from '../netlify/functions/mcp';

const transport = new StreamableHTTPClientTransport(
  new URL('http://test.local/mcp'),
  {
    fetch: (url, init) => handleMcpRequest(new Request(url, init)),
  },
);

const client = new Client(
  { name: 'andrei-profile-smoke', version: '1.0.0' },
  { versionNegotiation: { mode: 'auto' } },
);

const forbiddenPublicClaims = [
  /\bsenior\b/i,
  /\bstaff\b/i,
  /\bAI engineer\b/i,
  /\bmachine learning\b/i,
  /\bML expertise\b/i,
  /\b2,000\b/i,
  /\b10\+ applications\b/i,
  /\b108K\b/i,
  /\b108 mil\b/i,
  /\+\d[\d ()-]{7,}\d/,
];

function assertApprovedPublicPayload(value: unknown) {
  const serialized = JSON.stringify(value);

  for (const claim of forbiddenPublicClaims) {
    assert.doesNotMatch(serialized, claim);
  }

  const visit = (current: unknown): void => {
    if (Array.isArray(current)) {
      current.forEach(visit);
      return;
    }

    if (typeof current !== 'object' || current === null) {
      return;
    }

    for (const [key, child] of Object.entries(current)) {
      assert.doesNotMatch(key, /phone|password|credential|secret/i);
      visit(child);
    }
  };

  visit(value);
}

async function main() {
  try {
    await client.connect(transport);

    const resources = await client.listResources();
    assert.ok(resources.resources.length >= 10, 'Expected public resources.');

    const profileResource = resources.resources.find(
      resource => resource.uri === 'profile://andrei/en',
    );
    assert.ok(profileResource, 'Expected the English profile resource.');

    for (const resource of resources.resources) {
      const read = await client.readResource({ uri: resource.uri });
      assert.ok(
        read.contents.length > 0,
        `Expected content for ${resource.uri}.`,
      );
      assertApprovedPublicPayload(read.contents);
    }

    const tools = await client.listTools();
    assert.deepEqual(tools.tools.map(tool => tool.name).sort(), [
      'get_cv',
      'get_profile',
      'get_work',
    ]);
    tools.tools.forEach(tool => {
      assert.equal(tool.annotations?.readOnlyHint, true);
      assert.equal(tool.annotations?.destructiveHint, false);
    });

    const called = await client.callTool({
      name: 'get_profile',
      arguments: { locale: 'pt-BR' },
    });
    assert.equal(called.isError, undefined);
    assert.ok(called.structuredContent, 'Expected structured tool content.');
    assertApprovedPublicPayload(called.structuredContent);

    const ptProfile = z
      .object({
        links: z.array(z.object({ id: z.string(), href: z.string() })),
      })
      .parse(called.structuredContent);
    const ptCvLink = ptProfile.links.find(link => link.id === 'cv');
    assert.equal(ptCvLink?.href, 'https://andreitf.co/cv/CV_PT.pdf');

    const rejected = await client.callTool({
      name: 'get_profile',
      arguments: { locale: 'fr' },
    });
    assert.equal(rejected.isError, true, 'Expected invalid locales to fail.');

    await assert.rejects(
      client.callTool({
        name: 'write_profile',
        arguments: {},
      }),
      /Tool write_profile not found/,
    );

    const getResponse = await handleMcpRequest(
      new Request('http://test.local/mcp'),
    );
    assert.equal(getResponse.status, 405, 'Expected stateless GET to fail.');

    const deleteResponse = await handleMcpRequest(
      new Request('http://test.local/mcp', { method: 'DELETE' }),
    );
    assert.equal(
      deleteResponse.status,
      405,
      'Expected stateless DELETE to fail.',
    );

    const unsupportedMediaType = await handleMcpRequest(
      new Request('http://test.local/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: '{}',
      }),
    );
    assert.equal(
      unsupportedMediaType.status,
      415,
      'Expected non-JSON requests to fail.',
    );

    console.log(
      JSON.stringify(
        {
          initialized: true,
          protocolVersion: client.getNegotiatedProtocolVersion(),
          resources: resources.resources.length,
          tools: tools.tools.map(tool => tool.name),
          readUri: profileResource.uri,
          calledTool: 'get_profile',
          invalidLocaleRejected: true,
          unknownToolRejected: true,
          statelessMethodsRejected: true,
          unsupportedMediaTypeRejected: true,
          publicPayloadsChecked: resources.resources.length,
        },
        null,
        2,
      ),
    );
  } finally {
    await client.close();
    await closeMcpHandler();
  }
}

void main();
