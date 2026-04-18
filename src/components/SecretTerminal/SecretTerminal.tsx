'use client';

import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import MatrixRain from './MatrixRain';
import { useSecretTerminal } from './useSecretTerminal';

interface SecretTerminalProps {
  onClose: () => void;
  onToggleTheme: () => boolean;
  onTriggerRealityGlitch: () => void;
}

const prompt = 'visitor@andreitf:~$';

const SecretTerminal = ({
  onClose,
  onToggleTheme,
  onTriggerRealityGlitch,
}: SecretTerminalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const compactButtonRef = useRef<HTMLButtonElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const [windowMode, setWindowMode] = useState<'default' | 'compact' | 'expanded'>(
    'default',
  );
  const [matrixModeActive, setMatrixModeActive] = useState(false);

  const handleTriggerMatrix = useCallback(() => {
    let nextValue = false;
    setMatrixModeActive(current => {
      nextValue = !current;
      return nextValue;
    });
    return nextValue;
  }, []);

  const {
    booting,
    busy,
    input,
    lines,
    reduceMotion,
    setInput,
    navigateHistory,
    submit,
  } = useSecretTerminal({
    onClose,
    onToggleTheme,
    onTriggerMatrix: handleTriggerMatrix,
    onTriggerRealityGlitch,
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const focusInput = () => {
    window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  useEffect(() => {
    if (!outputRef.current) return;

    outputRef.current.scrollTo({
      top: outputRef.current.scrollHeight,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, [lines, reduceMotion]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submit();
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      navigateHistory('up');
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      navigateHistory('down');
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    }
  };

  const handleTrapKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = ([
      closeButtonRef.current,
      compactButtonRef.current,
      expandButtonRef.current,
      inputRef.current,
    ] as Array<HTMLElement | null>).filter(
      (element): element is HTMLElement => element !== null,
    );

    if (!focusableElements.length) return;

    const activeIndex = focusableElements.findIndex(
      element => element === document.activeElement,
    );

    const direction = event.shiftKey ? -1 : 1;
    const currentIndex = activeIndex === -1 ? 0 : activeIndex;
    const nextIndex =
      (currentIndex + direction + focusableElements.length) %
      focusableElements.length;

    event.preventDefault();
    focusableElements[nextIndex]?.focus();
  };

  return (
    <div
      className="fixed inset-0 z-[1300] flex items-center justify-center p-4"
      onMouseDown={onClose}
    >
      <div className="absolute inset-0 bg-[rgba(18,18,20,0.22)] backdrop-blur-[4px]" />
      <div
        aria-labelledby="secret-terminal-title"
        aria-modal="true"
        className={`secret-terminal__window relative flex max-w-full flex-col overflow-hidden rounded-[22px] border border-[var(--color-border-strong)] bg-[rgba(14,14,16,0.92)] text-[#f6efe1] shadow-[0_30px_80px_rgba(17,17,19,0.28)] ${
          matrixModeActive ? 'secret-terminal__window--matrix' : ''
        } ${
          windowMode === 'compact'
            ? 'h-[min(420px,56vh)] w-[min(720px,88vw)] max-md:h-[58vh]'
            : windowMode === 'expanded'
              ? 'h-[min(680px,82vh)] w-[min(900px,94vw)] max-md:h-[78vh]'
              : 'h-[min(560px,72vh)] w-[min(720px,88vw)] max-md:h-[70vh]'
        }`}
        onKeyDown={handleTrapKeyDown}
        onMouseDown={event => event.stopPropagation()}
        role="dialog"
      >
        <div className="secret-terminal__scanlines pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative z-[1] flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              aria-label="Close terminal"
              className="group flex h-3 w-3 items-center justify-center rounded-full border border-[rgba(17,17,19,0.24)] bg-[#ff6b6b] text-[0.5rem] leading-none text-[rgba(17,17,19,0.7)] transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b6b]"
              onClick={onClose}
              ref={closeButtonRef}
              type="button"
            >
              <span aria-hidden="true" className="opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                ×
              </span>
            </button>
            <button
              aria-label={
                windowMode === 'compact'
                  ? 'Restore terminal size'
                  : 'Compact terminal'
              }
              className="group flex h-3 w-3 items-center justify-center rounded-full border border-[rgba(17,17,19,0.24)] bg-[#f6bd60] text-[0.5rem] leading-none text-[rgba(17,17,19,0.7)] transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6bd60]"
              onClick={() => {
                setWindowMode(current =>
                  current === 'compact' ? 'default' : 'compact',
                );
                focusInput();
              }}
              ref={compactButtonRef}
              type="button"
            >
              <span aria-hidden="true" className="opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                −
              </span>
            </button>
            <button
              aria-label={
                windowMode === 'expanded'
                  ? 'Restore terminal size'
                  : 'Expand terminal'
              }
              className="group flex h-3 w-3 items-center justify-center rounded-full border border-[rgba(17,17,19,0.24)] bg-[#6ed39a] text-[0.5rem] leading-none text-[rgba(17,17,19,0.7)] transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6ed39a]"
              onClick={() => {
                setWindowMode(current =>
                  current === 'expanded' ? 'default' : 'expanded',
                );
                focusInput();
              }}
              ref={expandButtonRef}
              type="button"
            >
              <span aria-hidden="true" className="opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                +
              </span>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <p
              className="m-0 text-[0.72rem] uppercase tracking-[0.18em] text-[rgba(246,239,225,0.56)]"
              id="secret-terminal-title"
            >
              terminal
            </p>
          </div>

          <div className="w-[4.5rem]" aria-hidden="true" />
        </div>

        <div
          className={`secret-terminal__body relative z-[1] flex-1 overflow-y-auto overflow-x-hidden font-[var(--font-mono)] text-[0.92rem] leading-[1.75] ${
            matrixModeActive ? 'secret-terminal__body--matrix' : ''
          }`}
          ref={outputRef}
        >
          <div className="relative min-h-full px-4 py-4">
            {matrixModeActive ? <MatrixRain /> : null}
            <div className="relative z-[1] flex flex-col gap-2">
              {lines.map(line => {
                if (line.kind === 'command') {
                  return (
                    <p className="m-0 text-[#f6efe1]" key={line.id}>
                      <span className="mr-2 text-[var(--color-primary-solid)]">
                        {prompt}
                      </span>
                      <span>{line.content}</span>
                    </p>
                  );
                }

                if (line.kind === 'ascii') {
                  return (
                    <pre
                      className="m-0 whitespace-pre-wrap text-[#f6efe1]"
                      key={line.id}
                    >
                      {line.content}
                    </pre>
                  );
                }

                const toneClassName =
                  line.kind === 'error'
                    ? 'text-[#ff9a9a]'
                    : line.kind === 'system'
                      ? 'text-[rgba(246,239,225,0.62)]'
                      : 'text-[#f6efe1]';

                return (
                  <p className={`m-0 ${toneClassName}`} key={line.id}>
                    {line.content}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <form
          className="relative z-[1] border-t border-[rgba(255,255,255,0.08)] px-4 py-3"
          onSubmit={handleSubmit}
        >
          <label className="flex items-center gap-3" htmlFor="secret-terminal-input">
            <span className="shrink-0 font-[var(--font-mono)] text-[0.86rem] text-[var(--color-primary-solid)] max-md:hidden">
              {prompt}
            </span>
            <span className="secret-terminal__prompt-dot h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-primary-solid)] md:hidden" />
            <input
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              aria-disabled={booting || busy}
              className={`w-full border-none bg-transparent font-[var(--font-mono)] text-[0.95rem] text-[#f6efe1] outline-none placeholder:text-[rgba(246,239,225,0.32)] ${
                booting || busy ? 'cursor-wait opacity-90' : ''
              }`}
              id="secret-terminal-input"
              inputMode="text"
              onChange={event => setInput(event.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder={
                booting
                  ? 'booting...'
                  : busy
                    ? 'working...'
                    : 'type "help" if you insist'
              }
              readOnly={booting || busy}
              ref={inputRef}
              spellCheck={false}
              type="text"
              value={input}
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SecretTerminal;
