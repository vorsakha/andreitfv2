import { ThemeInterface } from '@styles/theme';

// Static light theme values
const LIGHT_THEME: ThemeInterface = {
  text: '#0f0f0f',
  background: '#FAFAFA',
  shadow: 'rgba(255, 24, 76, 0.4)',
  colors: {
    red: {
      solid: '#ff184c',
      transparency: 'rgba(255, 24, 76, 0.4)',
    },
    gray: {
      solid: '#a3a3a3',
      transparency: 'rgba(163, 163, 163, 0.2)',
    },
  },
};

/**
 * Hook that provides static light theme values for styled-components compatibility
 */
export function useTheme(): ThemeInterface {
  return LIGHT_THEME;
}