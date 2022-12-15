import styled from 'styled-components';
import { List } from './List';

export const ListContainer = styled.ul<List>`
  list-style: none;
  margin: 1rem 0;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 10px;

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
    line-height: 1.1rem;
  }

  ::before {
    content: '';
    padding: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div:first-of-type {
    margin-right: 10px;
  }
`;
