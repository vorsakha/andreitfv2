'use client';

import { THEMES, theme } from '@styles/theme';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import { ThemeProvider } from 'styled-components';
import useLocalStorage from '@hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@lib/queryClient';
import { useSpotify } from '@hooks/useSpotify';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
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
    const loadedTheme: THEMES = getItem('@theme');

    if (loadedTheme) setSelectedTheme(loadedTheme);
  }, [getItem]);

  const Inner = ({ children }: { children: React.ReactNode }) => {
    const { data: song, isLoading } = useSpotify();

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
          songData={{ song: song || null, loading: isLoading }}
        />
        {children}
      </ThemeProvider>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Inner>{children}</Inner>
    </QueryClientProvider>
  );
};

export default LayoutProvider;
