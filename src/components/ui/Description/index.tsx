'use client';

import { FC, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const Description: FC<DescriptionProps> = ({ children, style, ...props }) => {
  const theme = useTheme();
  
  return (
    <p 
      style={{
        color: theme?.text,
        ...style
      }}
      {...props}
    >
      {children}
    </p>
  );
};
