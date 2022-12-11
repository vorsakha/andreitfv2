import styled from 'styled-components';

export const Container = styled.main`
  min-height: calc(100vh - 190px);
  background: ${({ theme }) => theme.background};
`;
