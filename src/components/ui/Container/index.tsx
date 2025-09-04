'use client';

import { FC, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<ContainerProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <div
      className="min-h-[calc(100vh-190px)]"
      style={{
        background: 'var(--theme-background)',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const Wrapper: FC<ContainerProps> = ({
  children,
  style,
  className,
  ...props
}) => {
  return (
    <div
      className={`my-6 first:mt-0 ${className || ''}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

interface MainProps extends HTMLAttributes<HTMLElement> {}

export const Main: FC<MainProps> = ({
  children,
  style,
  className,
  ...props
}) => {
  return (
    <main
      className={`flex flex-col max-w-[900px] justify-center mx-auto p-6 ${className || ''}`}
      style={style}
      {...props}
    >
      {children}
    </main>
  );
};

export const ContainerWrapper: FC<ContainerProps> = ({
  children,
  style,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex flex-col max-w-[900px] justify-center mx-auto p-6 ${className || ''}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
