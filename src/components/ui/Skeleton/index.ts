import styled, { keyframes } from 'styled-components';

interface SkeletonProps {
  width?: string;
  height?: string;
}

const skeletonLoading = keyframes`
  0% {
    background-color: rgba(255, 24, 76, 0.2);
  }
  100% {
    background-color: rgba(163, 163, 163, 0.2);
  }
`;

export const SkeletonTile = styled.div<SkeletonProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '8px'};
  border-radius: 2px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

export const SkeletonProfile = styled.div<SkeletonProps>`
  width: ${({ width }) => width ?? '36px'};
  height: ${({ height }) => height ?? '36px'};
  border-radius: 4px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
