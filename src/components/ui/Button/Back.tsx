'use client';

import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { IoReturnUpBackSharp } from '@react-icons/all-files/io5/IoReturnUpBackSharp';

const BackWrapper = styled(Link)`
  color: ${({ theme }) => theme.colors.gray.solid};
  text-shadow: none;
  font-size: 13.33px;
  cursor: pointer;
  text-decoration: none;
  width: 60px;
`;

const Arrow = styled(IoReturnUpBackSharp)`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: -8px;
  color: ${({ theme }) => theme.colors.red.solid};
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.6));
`;

interface BackProps extends PropsWithChildren {
  href: string;
}

const Back: FC<BackProps> = ({ children, href }) => {
  return (
    <BackWrapper href={href}>
      <Arrow />
      {children}
      <div />
    </BackWrapper>
  );
};

export default Back;
