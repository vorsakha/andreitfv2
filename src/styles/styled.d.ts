import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    text: string;
    background: string;
    shadow: string;
    colors: Record<string, ColorsInterface>;
  }
}
