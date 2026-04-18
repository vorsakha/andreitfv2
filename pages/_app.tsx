import type { AppProps } from 'next/app';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import { QueryClientProvider } from '@tanstack/react-query';
import AmbientBackground from '@components/AmbientBackground/AmbientBackground';
import { Container } from '@ui/Container';
import { queryClient } from '@lib/queryClient';

import '../src/app/globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

function AppContent({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
      style={{ fontFamily: 'var(--font-sans), sans-serif' }}
    >
      <AmbientBackground />
      <Container>
        <Component {...pageProps} />
      </Container>
    </main>
  );
}

export default function App(props: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent {...props} />
    </QueryClientProvider>
  );
}
