import Link from 'next/link';
import styled from 'styled-components';

export const FeaturedContainer = styled.div``;
export const FeaturedList = styled.div`
  padding: 24px 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FeaturedItem = styled(Link)`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.red.solid};
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease;
  text-decoration: none;

  h3 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    text-decoration: underline;
  }

  small {
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.gray.solid};
    text-shadow: none;
  }

  :hover {
    /* box-shadow: ${({ theme }) =>
      theme.colors.gray.transparency} 0px 5px 20px; */
    scale: 1.03;
  }
`;
