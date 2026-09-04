import Link from 'next/link';

import { createRouteMetadata } from '@/app/site-config';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { absoluteUrl } from '@/lib/public-profile/selectors';

export const metadata = createRouteMetadata({
  pathname: '/connect',
  title: 'Connect an agent',
  description: 'Read my public profile, CV links and work through MCP.',
});

export default function ConnectPage() {
  return (
    <div className="page-shell note-page">
      <SiteHeader />
      <main>
        <article className="note-article">
          <header>
            <h1>Connect an agent</h1>
            <p className="note-summary">
              Read my public profile, CV links and selected work in English or
              Portuguese. No account or API key is needed.
            </p>
          </header>
          <div className="connection-details">
            <p>
              Add a remote MCP server in your client, choose Streamable HTTP and
              use this endpoint:
            </p>
            <code className="connection-endpoint">{absoluteUrl('/mcp')}</code>
            <p>
              The server is read-only. It offers <code>get_profile</code>,{' '}
              <code>get_cv</code> and <code>get_work</code>, plus resources for
              the public profile, CV links, work and notes.
            </p>
            <p>
              The endpoint accepts MCP requests, not browser visits. For a
              direct read, use <a href="/profile.json">profile.json</a> or{' '}
              <a href="/llms.txt">llms.txt</a>.
            </p>
          </div>
          <Link className="back-link" href="/">
            Back to homepage
          </Link>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
