'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

type CommandLink = Readonly<{
  label: string;
  href: string;
}>;

type CommandMenuProps = Readonly<{
  links: readonly CommandLink[];
}>;

export function CommandMenu({ links }: CommandMenuProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        const details = detailsRef.current;

        if (details) {
          details.open = true;
          details.querySelector<HTMLAnchorElement>('a')?.focus();
        }
      }

      if (event.key === 'Escape' && detailsRef.current?.open) {
        detailsRef.current.open = false;
        detailsRef.current.querySelector('summary')?.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleNavigation(href: string) {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }

    const destination = new URL(href, window.location.href);

    if (destination.pathname === window.location.pathname && destination.hash) {
      const target = document.getElementById(destination.hash.slice(1));

      if (target) {
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      }
    }
  }

  return (
    <details className="command-menu" ref={detailsRef}>
      <summary className="command-trigger" aria-label="Open site navigation">
        ⌘K
      </summary>
      <div className="command-dialog">
        <div className="command-dialog__header">
          <p>Go to</p>
          <span>Esc</span>
        </div>
        <nav aria-label="Command menu">
          <ul>
            {links.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onNavigate={() => handleNavigation(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </details>
  );
}
