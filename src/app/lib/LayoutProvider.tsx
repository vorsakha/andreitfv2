'use client';

import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@lib/queryClient';
import { useSpotify } from '@hooks/useSpotify';
import { useTheme } from '@hooks/useTheme';

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const { data: song, isLoading } = useSpotify();
  const theme = useTheme();

  return (
    <>
      <Sidebar
        handleMenu={() => setMenuIsOpen(!isMenuOpen)}
        isOpen={isMenuOpen}
      />
      <Navbar
        handleMenu={() => setMenuIsOpen(!isMenuOpen)}
        songData={{ song: song || null, loading: isLoading }}
      />
      {children}
    </>
  );
};

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Menu>{children}</Menu>
    </QueryClientProvider>
  );
};

export default LayoutProvider;
