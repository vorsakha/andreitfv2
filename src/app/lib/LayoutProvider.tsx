'use client';

import { THEMES, theme } from '@styles/theme';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import { ThemeProvider } from 'styled-components';
import useSWR from 'swr';
import useLocalStorage from '@hooks/useLocalStorage';
import { useEffect, useState } from 'react';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { setItem, getItem } = useLocalStorage();
  const [selectedTheme, setSelectedTheme] = useState<THEMES>(THEMES.DARK);
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data: song, isLoading } = useSWR('/api/spotify/current', fetcher);

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
        songData={{ song, loading: isLoading }}
      />
      {children}
    </ThemeProvider>
  );
};

export default LayoutProvider;
