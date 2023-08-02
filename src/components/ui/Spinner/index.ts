import styled, { keyframes } from 'styled-components';
import { ImSpinner2 } from '@react-icons/all-files/im/ImSpinner2';

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled(ImSpinner2)`
  position: absolute;
  top: 45%;
  left: 45%;
  color: ${({ theme }) => theme.colors.gray.solid};
  font-size: 2rem;
  animation: ${spin} 1s linear infinite;
  fill: ${({ theme }) => theme.colors.red.solid};

  svg {
    color: ${({ theme }) => theme.colors.red.solid};
  }
`;
