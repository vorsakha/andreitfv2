'use client';

import { CSSProperties, PropsWithChildren, useEffect, useRef } from 'react';

import { useSecretTerminalContext } from './SecretTerminalProvider';

interface SecretTerminalTriggerProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

const LONG_PRESS_MS = 800;

const SecretTerminalTrigger = ({
  children,
  className,
  style,
}: SecretTerminalTriggerProps) => {
  const { openTerminal } = useSecretTerminalContext();
  const longPressTimerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (longPressTimerRef.current === null) return;
    window.clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = null;
  };

  const startLongPress = () => {
    clearTimer();
    longPressTimerRef.current = window.setTimeout(() => {
      openTerminal();
      longPressTimerRef.current = null;
    }, LONG_PRESS_MS);
  };

  useEffect(() => {
    return () => {
      if (longPressTimerRef.current === null) return;
      window.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    };
  }, []);

  return (
    <p
      className={className}
      onPointerCancel={clearTimer}
      onPointerDown={event => {
        if (event.pointerType === 'mouse') return;
        startLongPress();
      }}
      onPointerLeave={clearTimer}
      onPointerUp={clearTimer}
      style={{
        touchAction: 'manipulation',
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export default SecretTerminalTrigger;
