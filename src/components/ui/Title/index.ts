'use client';

import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
`;

export const AltTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  padding: 12px 0;
  font-size: 2.6rem;
  text-align: start;
  letter-spacing: normal;
  line-height: 3rem;
  font-weight: bold;
  word-wrap: break-word;

  @media screen and (max-width: 480px) {
    font-size: 2.2rem;
    line-height: 55px;
  }

  @media screen and (max-width: 340px) {
    font-size: 1.5rem;
  }
`;
