import styled from 'styled-components';
import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import Link from 'next/link';

type SidebarStyledTypes = {
  handleMenu?: () => void;
  $isOpen?: boolean;
};

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  opacity: ${(props: SidebarStyledTypes) => (props.$isOpen ? '100%' : '0')};
  top: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  transition: 0.2s ease-in-out;
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 45px;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.colors.red.solid};
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.8));
`;
export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 60px);
  text-align: center;
  gap: 1rem;

  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: ${({ theme }) => theme.text};
    letter-spacing: 1.1px;
    transition: 0.2s ease-in-out;
    text-shadow: none;
    border: none;
    background-color: transparent;

    &:hover {
      color: ${({ theme }) => theme.colors.gray.solid};
    }
  }
  svg {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 80px);
  }
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: ${({ theme }) => theme.text};
  letter-spacing: 1.1px;
  transition: 0.2s ease-in-out;
  text-shadow: none;
  border-bottom: none;

  &:hover {
    color: ${({ theme }) => theme.colors.gray.solid};
  }
`;
