'use client';

import { FC, HTMLAttributes } from 'react';

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const Description: FC<DescriptionProps> = ({ children, style, ...props }) => {
  return (
    <p 
      style={{
        color: 'var(--theme-text)',
        ...style
      }}
      {...props}
    >
      {children}
    </p>
  );
};
