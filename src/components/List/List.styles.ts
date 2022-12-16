import styled from 'styled-components';
import { List } from './List';

export const ListContainer = styled.ul<List>`
  list-style: none;
  margin: 1rem 0;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ direction }) => (direction === 'row' ? '1rem' : '10px')};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ListItem = styled.li<List>`
  display: flex;
  align-items: center;
  margin: 0 !important;

  img {
    border-radius: 4px;
    filter: ${({ grayscaleImage }) =>
      grayscaleImage ? 'grayscale(100%)' : 'none'};
  }

  p,
  a {
    line-height: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  small {
    line-height: 14px;
    margin-top: 3px;
  }

  ::before {
    content: '';
    padding: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const ListItemContent = styled.div`
  padding: 1rem 0;
`;
export const ListItemImage = styled.div`
  margin-right: 10px;
`;
