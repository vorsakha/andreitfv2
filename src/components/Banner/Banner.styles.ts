import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 48px 0;
  overflow: hidden;
  letter-spacing: 0.15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;

  li {
    display: flex;
    margin-bottom: 10px;
  }
  p {
    color: ${({ theme }) => theme.colors.gray.solid};
    text-align: start;
    padding: 12px 0;
    font-size: 1rem;
    font-weight: 300;
  }
  h1 {
    color: ${({ theme }) => theme.colors.red.solid};
    padding: 12px 0;
    text-transform: uppercase;
    font-size: 4rem;
    display: flex;
    text-align: start;
    letter-spacing: normal;
    line-height: 4rem;
    margin-bottom: -8px;
    font-weight: bold;
    text-shadow: ${({ theme }) =>
      ` ${theme.colors.red.transparency} 0px 4px 18px, ${theme.colors.red.transparency} 0px 2px 10px`};

    @media screen and (max-width: 480px) {
      font-size: 3.2rem;
      line-height: 55px;
    }
    @media screen and (max-width: 340px) {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-bottom: 24px;
    ul {
      align-self: center;
    }
    li {
      display: flex;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  padding: 12px 0;
`;

export const SocialLink = styled.a`
  font-size: 2rem;
  margin-right: 1rem;
  transition: all 0.2s ease;
  border-bottom: none;

  filter: drop-shadow(
    0px 2px 6px ${({ theme }) => theme.colors.gray.transparency}
  );

  :hover {
    filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5));
  }
`;
