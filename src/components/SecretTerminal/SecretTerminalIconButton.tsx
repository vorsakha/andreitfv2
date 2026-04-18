'use client';

import { MouseEvent } from 'react';
import { HiTerminal } from '@react-icons/all-files/hi/HiTerminal';

import { useSecretTerminalContext } from './SecretTerminalProvider';

interface SecretTerminalIconButtonProps {
  className?: string;
}

const SecretTerminalIconButton = ({
  className,
}: SecretTerminalIconButtonProps) => {
  const { openTerminal } = useSecretTerminalContext();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    openTerminal();
  };

  return (
    <button
      aria-label="Open secret terminal"
      className={`inline-flex h-6 w-6 items-center justify-center rounded-md border border-transparent text-[var(--theme-subtle)] opacity-70 transition-[color,opacity,border-color,transform] hover:border-[var(--color-border)] hover:text-[var(--theme-text)] hover:opacity-100 hover:-translate-y-[1px] focus-visible:border-[var(--color-primary-solid)] focus-visible:text-[var(--theme-text)] focus-visible:opacity-100 focus-visible:outline-none ${className || ''}`}
      onClick={handleClick}
      type="button"
    >
      <HiTerminal aria-hidden="true" className="h-[0.92rem] w-[0.92rem]" />
    </button>
  );
};

export default SecretTerminalIconButton;
