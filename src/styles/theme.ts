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
    transparency: 'rgba(255, 255, 255, 0.2)',
  },
};

export const theme = {
  light: {
    text: '#2d2d2d',
    background: '#FAFAFA',
    shadow: 'rgba(255, 24, 76, 0.4)',
    colors,
  },
  dark: {
    text: '#FAFAFA',
    background: '#2D2D2D',
    shadow: 'rgba(255, 24, 76, 0.4)',
    colors,
  },
};

export const GlobalStyles = createGlobalStyle`
    @import
    url('https://fonts.googleapis.com/css2?family=Inter&family=Nunito&display=swap');
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
        line-height: 1.7rem;
        font-weight: 300;
    }

    a {
        color: ${({ theme }) => theme.text};
        text-shadow: ${({ theme }) =>
          `${theme.colors.gray.transparency} 0px 4px 18px, ${theme.colors.gray.transparency} 0px 2px 10px`};
        
        
        :hover {
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
    margin-top: 1rem;
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
`;
