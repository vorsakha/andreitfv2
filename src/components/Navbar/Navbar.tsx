import { FaBars } from '@react-icons/all-files/fa/FaBars';
import Link from 'next/link';
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

const linkClassName =
  'flex items-center justify-center no-underline py-1 px-6 cursor-pointer transition ease-in-out duration-200 min-w-[89px] min-h-9 border-0 bg-transparent text-[var(--color-text)] hover:text-[var(--theme-text)]';

const Navbar: React.FC<NavbarProps> = ({
  handleMenu,
  songData,
}): JSX.Element => {
  const pathname = usePathname();

  return (
    <nav className="bg-background text-text h-[130px] flex justify-center items-center">
      <div className="flex justify-between items-center h-[130px] w-full max-w-[900px] px-6">
        <Link
          href={ROUTES.HOME}
          className="text-[35px] p-[10px] cursor-pointer no-underline flex items-center text-primary! navbar-logo"
        >
          T<span className="ml-[-5px]">F</span>
        </Link>
        <div
          onClick={handleMenu}
          className="hidden max-md:block absolute top-[30px] right-0 translate-x-[-100%] translate-y-[50%] text-[1.8rem] cursor-pointer text-primary navbar-mobile-icon"
        >
          <FaBars />
        </div>
        <div className="flex items-center text-center p-0 gap-4 max-md:hidden">
          <div
            className={`flex justify-center items-center ${pathname === ROUTES.PROJECTS ? 'active' : ''}`}
          >
            <Link href={ROUTES.PROJECTS} className={linkClassName}>
              Projects
            </Link>
          </div>
          <div
            className={`flex justify-center items-center ${pathname === ROUTES.BLOG ? 'active' : ''}`}
          >
            <Link href={ROUTES.BLOG} className={linkClassName}>
              Blog
            </Link>
          </div>
        </div>

        <div className="max-md:hidden">
          <CurrentlyPlaying song={songData.song} loading={songData.loading} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
