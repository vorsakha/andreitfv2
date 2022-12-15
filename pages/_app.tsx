import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { GlobalStyles, theme, THEMES } from '../src/styles/theme';
import Navbar from '../src/components/Navbar';
import Sidebar from '../src/components/Sidebar';
import Footer from '../src/components/Footer';
import { Container } from '../src/components/ui/Container';
import useLocalStorage from '../src/hooks/useLocalStorage';

export default function App({ Component, pageProps }: AppProps) {
  const { setItem, getItem } = useLocalStorage();
  const [selectedTheme, setSelectedTheme] = useState<THEMES>(THEMES.DARK);
  const [isMenuOpen, setMenuIsOpen] = useState(false);

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
      />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
