import styled from 'styled-components';
import { List } from '@components/List/List';

export const ListContainer = styled.ul<List>`
  ::before {
    content: none;
    color: inherit;
    text-shadow: none;
    display: inline-block;
    font-size: inherit;
  }
  list-style: square;
  margin: 1rem 0;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ direction, gap }) => (direction === 'row' ? '1rem' : gap + 'px')};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ListItem = styled.li<List>`
  ::before {
    padding-right: 0;
    content: none;
    color: inherit;
    text-shadow: none;
    display: inline-block;
    font-size: inherit;
  }

  display: flex;
  align-items: center;
  margin: 0 !important;

  img {
    border-radius: 4px;
    filter: ${({ grayscaleImage }) =>
      grayscaleImage ? 'grayscale(100%)' : 'none'};
    object-fit: cover;
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
  align-self: center;
`;
export const ListItemImage = styled.div`
  margin-right: 10px;
`;
