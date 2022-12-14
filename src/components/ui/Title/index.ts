import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
`;

export const AltTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  padding: 12px 0;
  font-size: 2.6rem;
  display: flex;
  text-align: start;
  letter-spacing: normal;
  line-height: 3rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
    line-height: 55px;
    text-align: center;
  }
  @media screen and (max-width: 340px) {
    font-size: 1.5rem;
  }
`;
