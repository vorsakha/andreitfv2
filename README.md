# andreitf.co

Andrei Ferreira's public profile and portfolio. The site uses the Next.js App
Router, React Server Components, and one typed bilingual public-profile module.

## Local development

```bash
npm install
npm run dev
```

No environment variables or external content services are required.

## Checks

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

## MCP

The public read-only endpoint is `https://andreitf.co/mcp`, using Streamable
HTTP with no authentication. The site's `/connect` page has client setup
instructions. The Netlify function's in-source configuration mounts the
endpoint at `/mcp`.
