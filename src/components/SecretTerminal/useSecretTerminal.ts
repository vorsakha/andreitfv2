'use client';

import { useEffect, useRef, useState } from 'react';

import { runTerminalCommand } from './commands';
import {
  TerminalCommandContext,
  TerminalLine,
  TerminalLineKind,
} from './SecretTerminal.types';

interface UseSecretTerminalOptions {
  onClose: () => void;
  onToggleTheme: () => boolean;
  onTriggerMatrix: () => boolean;
  onTriggerRealityGlitch: () => void;
}

export function useSecretTerminal({
  onClose,
  onToggleTheme,
  onTriggerMatrix,
  onTriggerRealityGlitch,
}: UseSecretTerminalOptions) {
  const [input, setInput] = useState('');
  const [booting, setBooting] = useState(true);
  const [busy, setBusy] = useState(true);
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: 'terminal-line-0',
      content: 'booting terminal interface...',
      kind: 'system',
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  const lineIdRef = useRef(1);
  const sessionIdRef = useRef(0);
  const mountedRef = useRef(false);

  const nextLine = (
    content: string,
    kind: TerminalLineKind = 'output',
  ): TerminalLine => {
    return {
      id: `terminal-line-${lineIdRef.current++}`,
      content,
      kind,
    };
  };

  const appendLines = (
    sessionId: number,
    entries: string[],
    kind: TerminalLineKind = 'output',
  ) => {
    if (!mountedRef.current || sessionIdRef.current !== sessionId) return;

    setLines(previous => [...previous, ...entries.map(entry => nextLine(entry, kind))]);
  };

  const clearHistory = (sessionId: number) => {
    if (!mountedRef.current || sessionIdRef.current !== sessionId) return;
    setLines([]);
  };

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      sessionIdRef.current += 1;
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyMatch = () => setReduceMotion(mediaQuery.matches);

    applyMatch();
    mediaQuery.addEventListener('change', applyMatch);

    return () => {
      mediaQuery.removeEventListener('change', applyMatch);
    };
  }, []);

  useEffect(() => {
    sessionIdRef.current += 1;
    const sessionId = sessionIdRef.current;
    const bootDelay =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 0
        : 280;

    const readyTimer = window.setTimeout(
      () => {
        if (!mountedRef.current || sessionIdRef.current !== sessionId) return;
        setLines(previous => [
          ...previous,
          {
            id: `terminal-line-${lineIdRef.current++}`,
            content: 'type "help" if you behave badly',
            kind: 'system',
          },
        ]);
        setBooting(false);
        setBusy(false);
      },
      bootDelay,
    );

    return () => {
      window.clearTimeout(readyTimer);
      sessionIdRef.current += 1;
    };
  }, []);

  const submit = async () => {
    const rawInput = input.trim();
    if (!rawInput || booting || busy) return;

    const sessionId = sessionIdRef.current;

    setLines(previous => [
      ...previous,
      nextLine(rawInput, 'command'),
    ]);
    setCommandHistory(previous => [...previous, rawInput]);
    setHistoryIndex(null);
    setInput('');
    setBusy(true);

    const commandContext: TerminalCommandContext = {
      appendLine: (line, kind = 'output') => appendLines(sessionId, [line], kind),
      appendLines: (entries, kind = 'output') =>
        appendLines(sessionId, entries, kind),
      clearHistory: () => clearHistory(sessionId),
      close: () => {
        if (!mountedRef.current || sessionIdRef.current !== sessionId) return;
        onClose();
      },
      reduceMotion,
      toggleTheme: onToggleTheme,
      triggerMatrix: onTriggerMatrix,
      triggerRealityGlitch: onTriggerRealityGlitch,
    };

    try {
      await runTerminalCommand(rawInput, commandContext);
    } catch {
      appendLines(
        sessionId,
        ['terminal experienced a brief identity crisis'],
        'error',
      );
    } finally {
      if (!mountedRef.current || sessionIdRef.current !== sessionId) return;
      setBusy(false);
    }
  };

  const navigateHistory = (direction: 'up' | 'down') => {
    if (!commandHistory.length || booting || busy) return;

    if (direction === 'up') {
      const nextIndex =
        historyIndex === null
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex] ?? '');
      return;
    }

    if (historyIndex === null) return;

    if (historyIndex >= commandHistory.length - 1) {
      setHistoryIndex(null);
      setInput('');
      return;
    }

    const nextIndex = historyIndex + 1;
    setHistoryIndex(nextIndex);
    setInput(commandHistory[nextIndex] ?? '');
  };

  return {
    booting,
    busy,
    input,
    lines,
    reduceMotion,
    setInput,
    navigateHistory,
    submit,
  };
}
