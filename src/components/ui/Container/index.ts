import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 190px);
  background: ${({ theme }) => theme.background};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  justify-content: center;
  margin: 0 auto;
  padding: 24px;
`;
