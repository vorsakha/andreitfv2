import styled from 'styled-components';
import { GoPrimitiveDot } from '@react-icons/all-files/go/GoPrimitiveDot';

export const Dot = styled(GoPrimitiveDot)`
  color: ${({ theme }) => theme.colors.red.solid};
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.8));
`;
