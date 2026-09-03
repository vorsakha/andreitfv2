import type { ReactNode } from 'react';

import '@fontsource-variable/newsreader';
import './globals.css';

import { siteFontClassName, siteMetadata, siteViewport } from './site-config';

export const metadata = siteMetadata;
export const viewport = siteViewport;

type EnglishRootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function EnglishRootLayout({
  children,
}: EnglishRootLayoutProps) {
  return (
    <html lang="en" className={siteFontClassName}>
      <body>{children}</body>
    </html>
  );
}
