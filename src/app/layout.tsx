import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';

import AmbientBackground from '@components/AmbientBackground/AmbientBackground';
import { Container } from '@ui/Container';

import LayoutProvider from './lib/LayoutProvider';

import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
        <AmbientBackground />
        <main>
          <LayoutProvider>
            <Container>{children}</Container>
          </LayoutProvider>
        </main>
      </body>
    </html>
  );
}
