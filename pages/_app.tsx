import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { GlobalStyles, theme, THEMES } from '../src/styles/theme';
import Navbar from '../src/components/Navbar';
import Sidebar from '../src/components/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  const [selectedTheme, setSelectedTheme] = useState<THEMES>(THEMES.DARK);
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const toggleTheme = () => {
    setSelectedTheme(prev =>
      prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK,
    );
  };

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
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
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
