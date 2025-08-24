'use client';

import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { useTheme } from 'styled-components';

import { IoReturnUpBackSharp } from '@react-icons/all-files/io5/IoReturnUpBackSharp';

interface BackProps extends PropsWithChildren {
  href: string;
}

const Back: FC<BackProps> = ({ children, href }) => {
  const theme = useTheme();
  
  return (
    <Link 
      href={href}
      className="cursor-pointer no-underline w-[60px]"
      style={{
        color: theme?.colors?.gray?.solid,
        textShadow: 'none',
        fontSize: '13.33px'
      }}
    >
      <IoReturnUpBackSharp 
        className="text-[18px] flex items-center -mb-2"
        style={{
          color: theme?.colors?.red?.solid,
          filter: 'drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.6))'
        }}
      />
      {children}
      <div />
    </Link>
  );
};

export default Back;
