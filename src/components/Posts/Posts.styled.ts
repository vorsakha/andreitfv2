import Link from 'next/link';
import styled from 'styled-components';

export const ArchiveContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;
export const PostHero = styled.div`
  min-width: 100%;
  height: 250px;
  filter: grayscale(100%);
  transition: 0.2s opacity ease;

  img {
    border-radius: 8px;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;
export const ArchiveWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 24px 0 24px;
`;
export const ArchiveTitle = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
`;
export const ArchiveList = styled.div`
  padding: 0 0 2rem 0;
`;
export const PostItem = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: minmax(49%, 1fr);
  grid-template-areas: 'col1 col2';
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
    margin: 1rem 0;
    grid-gap: 0.2rem;
  }
`;
export const Column1 = styled.div`
  grid-area: col1;
`;
export const Column2 = styled.div`
  grid-area: col2;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const PostLink = styled(Link)`
  border-bottom: none;
  transition: all 0.2s ease;
  font-size: 1.6rem;
`;
export const PostDescription = styled.div`
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.gray.solid};

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
export const PostDate = styled.small`
  color: ${({ theme }) => theme.colors.gray.solid};
  font-style: italic;
  width: 100%;
  margin-top: 4px;
`;
