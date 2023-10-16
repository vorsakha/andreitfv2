import {
  FooterContainer,
  FooterWrapper,
  FooterRights,
  FooterMaker,
  CodeIcon,
  FooterAnchor,
} from '@components/Footer/Footer.styles';

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterRights>ⓒ {new Date().getFullYear()} Andrei T.F.</FooterRights>
        <FooterMaker>
          <CodeIcon /> with{' '}
          <FooterAnchor
            href="https://nextjs.org/"
            target="_blank"
            aria-label="Gatsby"
            rel="noopener noreferrer"
          >
            Next.js
          </FooterAnchor>
        </FooterMaker>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
