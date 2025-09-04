'use client';

import { ImSpinner2 } from '@react-icons/all-files/im/ImSpinner2';

export const Spinner = () => {
  return (
    <ImSpinner2 
      className="absolute top-[45%] left-[45%] text-[2rem] animate-spin"
      style={{
        color: 'var(--color-gray-solid)',
        fill: 'var(--color-primary-solid)',
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite'
      }}
    />
  );
};
