import type { AppProps } from 'next/app';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@lib/queryClient';
import { useSpotify } from '@hooks/useSpotify';
import { useTheme } from '@hooks/useTheme';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import Footer from '@components/Footer';
import { Container } from '@ui/Container';

// Import globals.css for theme management
import '../src/app/globals.css';

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
});

function AppContent({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const { data: song, isLoading } = useSpotify();
  const theme = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <main className={inter.className}>
        <Sidebar
          handleMenu={() => setMenuIsOpen(!isMenuOpen)}
          isOpen={isMenuOpen}
        />
        <Navbar
          handleMenu={() => setMenuIsOpen(!isMenuOpen)}
          songData={{ song: song ?? null, loading: isLoading }}
        />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </main>
    </StyledThemeProvider>
  );
}

export default function App(props: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent {...props} />
    </QueryClientProvider>
  );
}
