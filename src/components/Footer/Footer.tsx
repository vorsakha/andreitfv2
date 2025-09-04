import { BiCodeAlt } from '@react-icons/all-files/bi/BiCodeAlt';

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="bg-background text-xs">
      <div className="p-6 h-[60px] flex flex-row justify-between items-center max-w-[900px] mx-auto">
        <div className="text-text text-center">ⓒ {new Date().getFullYear()} Andrei T.F.</div>
        <div className="text-text flex items-center max-md:text-xs max-md:mt-2">
          <BiCodeAlt className="text-base mr-1.5 text-text max-md:text-sm max-md:mr-1" /> with{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            aria-label="Next.js"
            rel="noopener noreferrer"
            className="ml-1 no-underline border-b-0"
          >
            Next.js
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
