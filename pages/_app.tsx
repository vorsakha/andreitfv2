import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { GlobalStyles, theme, THEMES } from '../src/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [selectedTheme, setSelectedTheme] = useState<THEMES>(THEMES.DARK);

  const toggleTheme = () => {
    setSelectedTheme(prev =>
      prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK,
    );
  };

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <GlobalStyles />
      <button onClick={toggleTheme}>toggle theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
