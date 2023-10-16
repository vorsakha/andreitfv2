'use client';

import styled from 'styled-components';
import { BiCodeAlt } from '@react-icons/all-files/bi/BiCodeAlt';

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.background};
  font-size: 12px;
`;
export const FooterWrapper = styled.div`
  padding: 24px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;
export const FooterRights = styled.div`
  color: ${({ theme }) => theme.text};
  text-align: center;
`;
export const FooterMaker = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 8px;
  }
`;
export const CodeIcon = styled(BiCodeAlt)`
  font-size: 16px;
  margin-right: 6px;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-right: 4px;
  }
`;
export const FooterAnchor = styled.a`
  margin-left: 4px;
  text-decoration: none;
  border-bottom: none;
`;
