import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  $active?: boolean;
}

const ButtonWrapper = styled.div<{ $active: boolean }>`
  button {
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 4px 1.5rem;
    cursor: pointer;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transition: 0.2s ease;
    min-width: 89px;
    min-height: 36px;
    border: none;
    background-color: ${({ $active, theme }) =>
      $active ? theme.colors.gray.transparency : 'transparent'};
    border-radius: 6px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray.transparency};
      color: ${({ theme }) => theme.text};
      text-shadow: none;
    }
  }
  svg {
    font-size: 1.5rem;
  }
`;

const Button: FC<ButtonProps> = (
  { children, onClick, $active = false },
  rest,
) => {
  return (
    <ButtonWrapper $active={$active}>
      <button onClick={onClick} {...rest}>
        {children}
      </button>
    </ButtonWrapper>
  );
};

export default Button;
