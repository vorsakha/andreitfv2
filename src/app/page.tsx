import { Metadata } from 'next';
import Link from 'next/link';
import HomeListening from '@components/HomeListening/HomeListening';
import {
  SecretTerminalIconButton,
  SecretTerminalTrigger,
} from '@components/SecretTerminal';

import { baseUrl } from '@/constants';

import { ContainerWrapper } from '@ui/Container';

export const metadata: Metadata = {
  title: 'Andrei T. Ferreira',
  description:
    'A calm, text-first home for Andrei T. Ferreira, a software engineer working across web2 and web3.',
  openGraph: {
    images: [`${baseUrl}/api/og?title=Andrei T. Ferreira`],
  },
};

const primaryLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/vorsakha',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andreitf/',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:andreitf.dev@gmail.com',
    external: true,
  },
  {
    label: 'CV',
    href: '/cv',
    external: false,
  },
];

const nowItems = [
  'Building product-facing software across web2 and web3.',
  'Keeping things simple, fast, and a little more thoughtful than they need to be.',
  'Paying attention to developer experience, design systems, and interfaces with some personality.',
];

const eyebrowStyle = {
  fontFamily: 'var(--font-mono), monospace',
};

const eyebrowClassName =
  'm-0 text-[0.74rem] uppercase tracking-[0.12em] text-[var(--theme-subtle)]';

const sectionClassName =
  'grid grid-cols-[120px_minmax(0,1fr)] gap-6 border-t border-[var(--color-border)] pt-6 max-md:grid-cols-1 max-md:gap-3';

const bodyCopyClassName =
  'm-0 max-w-[40rem] text-[1rem] leading-[1.85] text-[var(--theme-muted)]';

const linkClassName =
  'border-b border-transparent pb-[0.18rem] text-[var(--theme-text)] hover:border-[var(--color-primary-solid)]';

export default function Home() {
  return (
    <ContainerWrapper className="min-h-screen justify-center gap-[4.5rem] py-12 max-md:gap-14 max-md:py-8">
      <section className="flex flex-col gap-[1.2rem]">
        <SecretTerminalTrigger className={eyebrowClassName} style={eyebrowStyle}>
          software engineer / brazil
        </SecretTerminalTrigger>
        <h1 className="m-0 max-w-[8ch] text-[clamp(2.2rem,5.8vw,4.2rem)] leading-[0.98] tracking-[-0.05em] text-balance max-md:max-w-none">
          Andrei T. Ferreira
        </h1>
        <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2">
          {primaryLinks.map(link =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={linkClassName}
              >
                {link.label}
              </a>
            ) : link.label === 'CV' ? (
              <span
                className="inline-flex items-center gap-1.5"
                key={link.label}
              >
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
                <SecretTerminalIconButton />
              </span>
            ) : (
              <Link key={link.label} href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            ),
          )}
        </div>
      </section>

      <section className={sectionClassName}>
        <p className={eyebrowClassName} style={eyebrowStyle}>
          now
        </p>
        <div className="flex flex-col gap-3">
          <ul className="flex flex-col gap-4">
            {nowItems.map(item => (
              <li
                key={item}
                className="relative pl-[1.15rem] text-[var(--theme-muted)] leading-[1.8] before:absolute before:top-[0.72rem] before:left-0 before:h-[0.45rem] before:w-[0.45rem] before:rounded-full before:bg-[var(--color-primary-solid)] before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={sectionClassName}>
        <p className={eyebrowClassName} style={eyebrowStyle}>
          about
        </p>
        <div className="flex flex-col gap-3">
          <p className={bodyCopyClassName}>
            I like working close to the product. That usually means shaping the
            UI, tightening the system underneath it, and trimming away anything
            that feels noisy or unnecessary. I care about technical quality, but
            I also care about taste, pacing, and whether the final thing feels
            relaxed instead of overdesigned.
          </p>
          <HomeListening />
        </div>
      </section>
    </ContainerWrapper>
  );
}
