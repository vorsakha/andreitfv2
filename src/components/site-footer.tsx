import Link from 'next/link';

import { selectPublicLinks } from '@/lib/public-profile/selectors';
import type { Locale } from '@/lib/public-profile/schema';

type SiteFooterProps = Readonly<{
  locale?: Locale;
}>;

export function SiteFooter({ locale = 'en' }: SiteFooterProps) {
  const links = selectPublicLinks(locale);

  return (
    <footer className="site-footer">
      <nav className="footer-links" aria-label="Public links">
        {links.map(link =>
          link.href.startsWith('/') ? (
            <Link key={link.id} href={link.href}>
              {link.label}
            </Link>
          ) : (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ),
        )}
      </nav>
      <nav className="machine-links" aria-label="Machine-readable links">
        <a href="/profile.json">profile.json</a>
        <a href="/llms.txt">llms.txt</a>
        <a href="/mcp">MCP</a>
      </nav>
    </footer>
  );
}
