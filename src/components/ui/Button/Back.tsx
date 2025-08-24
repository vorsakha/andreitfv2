'use client';

import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { IoReturnUpBackSharp } from '@react-icons/all-files/io5/IoReturnUpBackSharp';

interface BackProps extends PropsWithChildren {
  href: string;
}

const Back: FC<BackProps> = ({ children, href }) => {
  return (
    <Link 
      href={href}
      className="cursor-pointer no-underline w-[60px]"
      style={{
        color: 'var(--color-gray-solid)',
        textShadow: 'none',
        fontSize: '13.33px'
      }}
    >
      <IoReturnUpBackSharp 
        className="text-[18px] flex items-center -mb-2"
        style={{
          color: 'var(--color-primary-solid)',
          filter: 'var(--drop-shadow-primary-soft)'
        }}
      />
      {children}
      <div />
    </Link>
  );
};

export default Back;
