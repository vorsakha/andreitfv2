import Link from 'next/link';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  width: 100%;
  max-width: 800px;
  padding: 0 24px;
`;
export const NavLogo = styled(Link)`
  font-size: 35px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.red.solid};
  text-shadow: ${({ theme }) =>
    `${theme.shadow} 0px 4px 18px, ${theme.shadow} 0px 2px 10px`};

  span {
    margin-left: -5px !important;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red.solid};
    filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.8));
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.div<{ active?: boolean }>`
  a,
  button {
    color: ${({ theme, active }) =>
      active ? theme.colors.red.solid : theme.text};
    text-shadow: ${({ theme, active }) =>
      active
        ? `${theme.shadow} 0px 4px 18px, ${theme.shadow} 0px 2px 10px`
        : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 4px 1.5rem;
    cursor: pointer;
    transition: 0.2s ease;
    min-width: 89px;
    min-height: 36px;
    border: none;
    background-color: transparent;

    :hover {
      background-color: ${({ theme }) => theme.colors.gray.transparency};
      border-radius: 6px;
      color: ${({ theme }) => theme.text};
      text-shadow: none;
    }
  }
  svg {
    font-size: 1.5rem;
  }
`;

export const NavLink = styled(Link)``;
