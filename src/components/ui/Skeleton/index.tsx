'use client';

import { FC, HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export const SkeletonTile: FC<SkeletonProps> = ({ 
  width = '100%', 
  height = '8px', 
  style,
  ...props 
}) => {
  return (
    <div
      className="rounded-[2px]"
      style={{
        width,
        height,
        animation: 'skeleton-pulse 1s linear infinite alternate',
        ...style
      }}
      {...props}
    />
  );
};

export const SkeletonProfile: FC<SkeletonProps> = ({ 
  width = '36px', 
  height = '36px', 
  style,
  ...props 
}) => {
  return (
    <div
      className="rounded-[4px]"
      style={{
        width,
        height,
        animation: 'skeleton-pulse 1s linear infinite alternate',
        ...style
      }}
      {...props}
    />
  );
};
