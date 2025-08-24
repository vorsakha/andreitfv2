'use client';

import { FC, HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';

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
        className="flex items-center justify-center no-underline py-1 px-6 cursor-pointer border-t-[3px] border-b-[3px] border-transparent transition-all duration-200 ease-in-out min-w-[89px] min-h-[36px] border-none rounded-md hover:text-shadow-none"
        style={{
          color: theme?.text,
          backgroundColor: $active ? theme?.colors?.gray?.transparency : 'transparent',
          ...style
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme?.colors?.gray?.transparency || '';
          e.currentTarget.style.color = theme?.text || '';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = $active ? (theme?.colors?.gray?.transparency || '') : 'transparent';
          e.currentTarget.style.color = theme?.text || '';
        }}
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
