import { FaBars } from '@react-icons/all-files/fa/FaBars';

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
import CurrentlyPlaying from '@components/CurrentlyPlayingV2';
import { ROUTES } from '@interfaces/routes';
import { SongResponse } from '@services/spotify/models';

type NavbarProps = {
  handleMenu: () => void;
  songData: {
    song: SongResponse | null;
    loading: boolean;
  };
};

const Navbar: React.FC<NavbarProps> = ({
  handleMenu,
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
        </NavMenu>

        <NavCurrentlyPlaying>
          <CurrentlyPlaying song={songData.song} loading={songData.loading} />
        </NavCurrentlyPlaying>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
