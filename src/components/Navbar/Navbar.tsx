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
  NavCurrentlyPlaying,
} from '@components/Navbar/Navbar.styles';
import { usePathname } from 'next/navigation';
import { THEMES } from '@styles/theme';
import Button from '@ui/Button';
import CurrentlyPlaying from '@components/CurrentlyPlayingV2';
import { ROUTES } from '@interfaces/routes';
import { SongResponse } from '@services/spotify/models';

type NavbarProps = {
  handleMenu: () => void;
  toggleTheme: () => void;
  selectedTheme: THEMES;
  songData: {
    song: SongResponse | null;
    loading: boolean;
  };
};

const Navbar: React.FC<NavbarProps> = ({
  handleMenu,
  toggleTheme,
  selectedTheme,
  songData,
}): JSX.Element => {
  const pathname = usePathname();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href={ROUTES.HOME}>
          T<span>F</span>
        </NavLogo>
        <MobileIcon onClick={handleMenu}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem $active={pathname === ROUTES.HOME}>
            <NavLink href={ROUTES.HOME}>Home</NavLink>
          </NavItem>
          <NavItem $active={pathname === ROUTES.LIB}>
            <NavLink href={ROUTES.LIB}>Lib</NavLink>
          </NavItem>
          <NavItem $active={pathname === ROUTES.BLOG}>
            <NavLink href={ROUTES.BLOG}>Blog</NavLink>
          </NavItem>

          <Button onClick={toggleTheme}>
            {selectedTheme === THEMES.DARK ? <SunIcon /> : <MoonIcon />}
          </Button>
        </NavMenu>

        <NavCurrentlyPlaying>
          <CurrentlyPlaying song={songData.song} loading={songData.loading} />
        </NavCurrentlyPlaying>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
