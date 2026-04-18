'use client';

import dynamic from 'next/dynamic';
import {
  createContext,
  ReactNode,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface SecretTerminalContextValue {
  openTerminal: () => void;
}

const SecretTerminalContext = createContext<SecretTerminalContextValue | null>(
  null,
);

const LazySecretTerminal = dynamic(() => import('./SecretTerminal'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-[1300] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[rgba(18,18,20,0.22)] backdrop-blur-[4px]" />
      <div className="relative rounded-[22px] border border-[var(--color-border-strong)] bg-[rgba(14,14,16,0.9)] px-5 py-4 font-[var(--font-mono)] text-[0.8rem] uppercase tracking-[0.18em] text-[rgba(246,239,225,0.72)] shadow-[0_30px_80px_rgba(17,17,19,0.28)]">
        loading terminal...
      </div>
    </div>
  ),
});

const REALITY_GLITCH_DURATION_MS = 1000;
const THEME_STORAGE_KEY = 'secret-terminal-theme';
const SECRET_TERMINAL_DOUBLE_TAP_MS = 420;

export const SecretTerminalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [hasLoadedTerminal, setHasLoadedTerminal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [themeEnabled, setThemeEnabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.sessionStorage.getItem(THEME_STORAGE_KEY) === '1';
  });
  const [realityGlitchActive, setRealityGlitchActive] = useState(false);
  const realityTimeoutRef = useRef<number | null>(null);
  const lastBackquotePressRef = useRef(0);

  useEffect(() => {
    document.body.dataset.terminalOpen = isOpen ? 'true' : 'false';
    document.body.dataset.terminalTheme = themeEnabled ? 'phosphor' : 'default';
    document.body.dataset.terminalGlitch = realityGlitchActive
      ? 'true'
      : 'false';
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, realityGlitchActive, themeEnabled]);

  const openTerminal = useCallback(() => {
    startTransition(() => {
      setHasLoadedTerminal(true);
      setIsOpen(true);
    });
  }, []);

  const closeTerminal = useCallback(() => {
    setIsOpen(false);
    setRealityGlitchActive(false);
  }, []);

  const triggerRealityGlitch = useCallback(() => {
    if (realityTimeoutRef.current !== null) {
      window.clearTimeout(realityTimeoutRef.current);
    }

    setRealityGlitchActive(true);

    realityTimeoutRef.current = window.setTimeout(() => {
      setRealityGlitchActive(false);
    }, REALITY_GLITCH_DURATION_MS);
  }, []);

  const toggleTheme = useCallback(() => {
    const nextValue = !themeEnabled;
    setThemeEnabled(nextValue);
    window.sessionStorage.setItem(THEME_STORAGE_KEY, nextValue ? '1' : '0');
    return nextValue;
  }, [themeEnabled]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName;
      const isEditable =
        target?.isContentEditable ||
        tagName === 'INPUT' ||
        tagName === 'TEXTAREA' ||
        tagName === 'SELECT';

      if (isEditable || event.repeat) return;

      if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.code === 'Period') {
        event.preventDefault();
        openTerminal();
        return;
      }

      if (
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        event.code === 'Backquote'
      ) {
        const now = window.performance.now();
        const elapsed = now - lastBackquotePressRef.current;
        lastBackquotePressRef.current = now;

        if (elapsed <= SECRET_TERMINAL_DOUBLE_TAP_MS) {
          event.preventDefault();
          openTerminal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openTerminal]);

  useEffect(() => {
    return () => {
      if (realityTimeoutRef.current !== null) {
        window.clearTimeout(realityTimeoutRef.current);
      }
    };
  }, []);

  return (
    <SecretTerminalContext.Provider value={{ openTerminal }}>
      {children}
      {hasLoadedTerminal && isOpen ? (
        <LazySecretTerminal
          onClose={closeTerminal}
          onToggleTheme={toggleTheme}
          onTriggerRealityGlitch={triggerRealityGlitch}
        />
      ) : null}
    </SecretTerminalContext.Provider>
  );
};

export const useSecretTerminalContext = () => {
  const context = useContext(SecretTerminalContext);

  if (!context) {
    throw new Error('useSecretTerminalContext must be used within provider');
  }

  return context;
};
