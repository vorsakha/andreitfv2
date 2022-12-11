import React from 'react';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { HiOutlineSun as SunIcon } from '@react-icons/all-files/hi/HiOutlineSun';
import { HiOutlineMoon as MoonIcon } from '@react-icons/all-files/hi/HiOutlineMoon';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from './Navbar.styles';
import { useRouter } from 'next/router';
import { THEMES } from '../../styles/theme';

type NavbarTypes = {
  handleMenu: () => void;
  toggleTheme: () => void;
  selectedTheme: THEMES;
};

const Navbar: React.FC<NavbarTypes> = ({
  handleMenu,
  toggleTheme,
  selectedTheme,
}): JSX.Element => {
  const router = useRouter();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="/">
          T<span>F</span>
        </NavLogo>
        <MobileIcon onClick={handleMenu}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem active={router.pathname === '/'}>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem active={router.pathname === '/misc'}>
            <NavLink href="/about">Misc</NavLink>
          </NavItem>
          <NavItem active={router.pathname === '/blog'}>
            <NavLink href="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <button onClick={toggleTheme}>
              {selectedTheme === THEMES.DARK ? <SunIcon /> : <MoonIcon />}
            </button>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
