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
npm run smoke:mcp
```

`npm run smoke:mcp` uses the official MCP client against the Netlify function
handler in process. The function's in-source configuration mounts the public
endpoint at `/mcp`.
