import Link from 'next/link';

import { publicProfile } from '@/lib/public-profile/data';
import {
  getCvPdfPath,
  selectCommandLinks,
} from '@/lib/public-profile/selectors';
import type { Locale } from '@/lib/public-profile/schema';

import { CommandMenu } from './command-menu';

type SiteHeaderProps = Readonly<{
  locale?: Locale;
}>;

export function SiteHeader({ locale = 'en' }: SiteHeaderProps) {
  const navigation = publicProfile.copy[locale].navigation;

  return (
    <header className="site-header">
      <Link className="site-name" href="/">
        {publicProfile.identity.name}
      </Link>
      <div className="header-actions">
        <nav className="primary-navigation" aria-label="Primary navigation">
          <Link href="/work">{navigation.work}</Link>
          <Link href="/#notes">{navigation.notes}</Link>
          <Link href="/#about">{navigation.about}</Link>
          <a href={getCvPdfPath(locale)}>{navigation.cv}</a>
        </nav>
        <div className="header-utilities">
          <CommandMenu links={selectCommandLinks(locale)} />
        </div>
      </div>
    </header>
  );
}
