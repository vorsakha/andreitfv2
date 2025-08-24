'use client';

import { ImSpinner2 } from '@react-icons/all-files/im/ImSpinner2';
import { useTheme } from 'styled-components';

export const Spinner = () => {
  const theme = useTheme();
  
  return (
    <ImSpinner2 
      className="absolute top-[45%] left-[45%] text-[2rem] animate-spin"
      style={{
        color: theme?.colors?.gray?.solid,
        fill: theme?.colors?.red?.solid,
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      }}
    />
  );
};
