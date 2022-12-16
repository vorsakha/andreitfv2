import React from 'react';
import { THEMES } from '../../styles/theme';
import { HiOutlineSun as SunIcon } from '@react-icons/all-files/hi/HiOutlineSun';
import { HiOutlineMoon as MoonIcon } from '@react-icons/all-files/hi/HiOutlineMoon';

import {
  SidebarContainer,
  IconWrapper,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from './Sidebar.styles';

type SidebarTypes = {
  handleMenu: () => void;
  toggleTheme: () => void;
  selectedTheme: THEMES;
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarTypes> = ({
  handleMenu,
  toggleTheme,
  selectedTheme,
  isOpen,
}): JSX.Element => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <IconWrapper onClick={handleMenu}>
        <CloseIcon />
      </IconWrapper>
      <SidebarMenu>
        <SidebarLink onClick={handleMenu} href="/">
          Home
        </SidebarLink>
        <SidebarLink onClick={handleMenu} href="/misc">
          Misc
        </SidebarLink>
        <SidebarLink onClick={handleMenu} href="/lib">
          Lib
        </SidebarLink>
        <SidebarLink onClick={handleMenu} href="/blog">
          Blog
        </SidebarLink>
        <button onClick={toggleTheme}>
          {selectedTheme === THEMES.DARK ? <SunIcon /> : <MoonIcon />}
        </button>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
