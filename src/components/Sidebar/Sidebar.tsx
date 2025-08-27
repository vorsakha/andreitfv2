import React from 'react';
import Link from 'next/link';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import { ROUTES } from '@interfaces/routes';

type SidebarTypes = {
  handleMenu: () => void;
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarTypes> = ({
  handleMenu,
  isOpen,
}): JSX.Element => {
  return (
    <div
      className={`fixed inset-0 w-full h-full z-[1000] bg-[var(--theme-background)] flex items-center justify-center left-0 transition-[top,opacity] duration-200 ease-in-out ${
        isOpen ? 'top-0 opacity-100' : '-top-full opacity-0'
      }`}
    >
      <div
        onClick={handleMenu}
        className="absolute top-[45px] right-6 bg-transparent text-[2rem] cursor-pointer outline-none"
      >
        <FaTimes className="text-[var(--color-primary-solid)] drop-shadow-[0_2px_6px_rgba(255,24,76,0.8)]" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <Link
          onClick={handleMenu}
          href={ROUTES.HOME}
          className="flex items-center justify-center text-[1.5rem] no-underline list-none text-[var(--theme-text)] tracking-[1.1px] transition-all duration-200 hover:text-[var(--color-gray-solid)] h-[60px] max-[480px]:h-[80px]"
        >
          Home
        </Link>
        <Link
          onClick={handleMenu}
          href={ROUTES.MISC}
          className="flex items-center justify-center text-[1.5rem] no-underline list-none text-[var(--theme-text)] tracking-[1.1px] transition-all duration-200 hover:text-[var(--color-gray-solid)] h-[60px] max-[480px]:h-[80px]"
        >
          Misc
        </Link>
        <Link
          onClick={handleMenu}
          href={ROUTES.LIB}
          className="flex items-center justify-center text-[1.5rem] no-underline list-none text-[var(--theme-text)] tracking-[1.1px] transition-all duration-200 hover:text-[var(--color-gray-solid)] h-[60px] max-[480px]:h-[80px]"
        >
          Lib
        </Link>
        <Link
          onClick={handleMenu}
          href={ROUTES.BLOG}
          className="flex items-center justify-center text-[1.5rem] no-underline list-none text-[var(--theme-text)] tracking-[1.1px] transition-all duration-200 hover:text-[var(--color-gray-solid)] h-[60px] max-[480px]:h-[80px]"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
