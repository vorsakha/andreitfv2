import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@lib/queryClient';
import { useSpotify } from '@hooks/useSpotify';

import { GlobalStyles, theme, THEMES } from '@styles/theme';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import Footer from '@components/Footer';
import { Container } from '@ui/Container';
import useLocalStorage from '@hooks/useLocalStorage';

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
});

function AppContent({ Component, pageProps }: AppProps) {
  const { setItem, getItem } = useLocalStorage();
  const [selectedTheme, setSelectedTheme] = useState<THEMES>(THEMES.DARK);
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const { data: song, isLoading } = useSpotify();

  const toggleTheme = () => {
    setSelectedTheme(prev => {
      const newTheme = prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      setItem('@theme', newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    const loadedTheme = getItem('@theme') as THEMES;

    if (loadedTheme) setSelectedTheme(loadedTheme);
  }, [getItem]);

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <main className={inter.className}>
        <GlobalStyles />
        <Sidebar
          handleMenu={() => setMenuIsOpen(!isMenuOpen)}
          isOpen={isMenuOpen}
          toggleTheme={toggleTheme}
          selectedTheme={selectedTheme}
        />
        <Navbar
          handleMenu={() => setMenuIsOpen(!isMenuOpen)}
          toggleTheme={toggleTheme}
          selectedTheme={selectedTheme}
          songData={{ song: song ?? null, loading: isLoading }}
        />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default function App(props: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent {...props} />
    </QueryClientProvider>
  );
}
