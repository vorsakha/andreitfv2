'use client';

export interface ColorsInterface {
  solid: string;
  transparency: string;
}

export interface ThemeInterface {
  text: string;
  background: string;
  shadow: string;
  colors: Record<string, ColorsInterface>;
}

const colors = {
  red: {
    solid: '#ff184c',
    transparency: 'rgba(255, 24, 76, 0.4)',
  },
  gray: {
    solid: '#a3a3a3',
    transparency: 'rgba(163, 163, 163, 0.2)',
  },
};

export const theme: ThemeInterface = {
  text: '#0f0f0f',
  background: '#FAFAFA',
  shadow: 'rgba(255, 24, 76, 0.4)',
  colors,
};
