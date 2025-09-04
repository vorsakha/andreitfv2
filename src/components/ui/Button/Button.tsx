'use client';

import { FC, HTMLAttributes } from 'react';
import { useTheme } from '@hooks/useTheme';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  $active?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  $active = false,
  style,
  className,
  ...rest
}: ButtonProps) => {
  const theme = useTheme();
  
  return (
    <div className={`${className || ''}`}>
      <button 
        className={`btn-themed flex items-center justify-center no-underline py-1 px-6 cursor-pointer border-t-[3px] border-b-[3px] border-transparent transition-all duration-200 ease-in-out min-w-[89px] min-h-[36px] border-none rounded-md hover:text-shadow-none ${$active ? 'active' : ''}`}
        style={style}
        onClick={onClick} 
        {...rest}
      >
        <div className="[&>svg]:text-2xl">
          {children}
        </div>
      </button>
    </div>
  );
};

export default Button;
