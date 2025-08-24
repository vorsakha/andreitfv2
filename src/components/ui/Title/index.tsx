'use client';

import { FC, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Title: FC<TitleProps> = ({ children, style, ...props }) => {
  const theme = useTheme();
  
  return (
    <h1 
      className="text-[1.4rem]"
      style={{
        color: theme?.text,
        ...style
      }}
      {...props}
    >
      {children}
    </h1>
  );
};

export const AltTitle: FC<TitleProps> = ({ children, style, ...props }) => {
  const theme = useTheme();
  
  return (
    <h2 
      className="py-3 text-[2.6rem] text-start tracking-normal leading-[3rem] font-bold break-words max-[480px]:text-[2.2rem] max-[480px]:leading-[55px] max-[340px]:text-[1.5rem]"
      style={{
        color: theme?.text,
        ...style
      }}
      {...props}
    >
      {children}
    </h2>
  );
};
