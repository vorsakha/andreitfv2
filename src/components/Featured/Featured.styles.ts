import Link from 'next/link';
import styled from 'styled-components';

export const FeaturedContainer = styled.div``;
export const FeaturedList = styled.div`
  padding: 24px 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FeaturedItem = styled(Link)`
  padding: 24px 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
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

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
