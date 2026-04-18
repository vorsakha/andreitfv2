export type TerminalLineKind =
  | 'command'
  | 'output'
  | 'system'
  | 'error'
  | 'ascii';

export interface TerminalLine {
  id: string;
  content: string;
  kind: TerminalLineKind;
}

export interface TerminalCommandContext {
  appendLine: (line: string, kind?: TerminalLineKind) => void;
  appendLines: (lines: string[], kind?: TerminalLineKind) => void;
  clearHistory: () => void;
  close: () => void;
  reduceMotion: boolean;
  toggleTheme: () => boolean;
  triggerMatrix: () => boolean;
  triggerRealityGlitch: () => void;
}
