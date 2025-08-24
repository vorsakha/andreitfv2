'use client';

import { createGlobalStyle } from 'styled-components';

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

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
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

export const theme = {
  light: {
    text: '#0f0f0f',
    background: '#FAFAFA',
    shadow: 'rgba(255, 24, 76, 0.4)',
    colors,
  },
  dark: {
    text: '#FAFAFA',
    background: '#0f0f0f',
    shadow: 'rgba(255, 24, 76, 0.4)',
    colors,
  },
};

export const GlobalStyles = createGlobalStyle`
    a {
        color: ${({ theme }) => theme.text};
        text-shadow: ${({ theme }) =>
          `${theme.colors.gray.transparency} 0px 4px 18px, ${theme.colors.gray.transparency} 0px 2px 10px`};
        transition: all 0.2s ease;
        
        
        &:hover {
          color: ${({ theme }) => theme.colors.red.solid};
          text-shadow: ${({ theme }) =>
            `${theme.colors.red.transparency} 0px 4px 18px, ${theme.colors.red.transparency} 0px 2px 10px`};
        }
    }

    ::selection {
        background: ${({ theme }) => theme.colors.gray.solid};
    }

    mark {
        background: ${({ theme }) => theme.colors.red.solid};
        padding: 4px;
        color: ${({ theme }) => theme.background};
    }

    ul {
    list-style: none;
  }

  li {
    display: flex;
  }
  li:first-child {
    margin-top: 0;
  }
  li::before {
    padding-right: 1rem;
  }

  ul li::before {
    content: "•";
    color: ${({ theme }) => theme.colors.red.solid};
    text-shadow: ${({ theme }) =>
      `${theme.colors.red.transparency} 0px 4px 18px, ${theme.colors.red.transparency} 0px 2px 10px`};
    display: inline-block;
    font-size: 1.5rem;
  }

  small {
    color: ${({ theme }) => theme.colors.gray.solid};
    font-style: italic;
  }

  .codeStyle {
    border-radius: 8px !important;
    border: none !important;
  }
`;
