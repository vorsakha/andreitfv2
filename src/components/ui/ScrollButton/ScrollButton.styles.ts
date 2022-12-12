import { BsArrowUp } from '@react-icons/all-files/bs/BsArrowUp';
import styled from 'styled-components';

export const Button = styled.button<{ scrolled: boolean }>`
  display: ${props => (props.scrolled ? 'flex' : 'none')};
  z-index: 2;
  position: fixed;
  bottom: 10vh;
  right: 6vw;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.red.solid};
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5));

  @media screen and (max-width: 768px) {
    right: 45vw;
    height: 40px;
    width: 40px;
    bottom: 5vh;
  }
`;
export const Arrow = styled(BsArrowUp)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.background};
`;
