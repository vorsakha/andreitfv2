import React from 'react';
import {
  CurrentlyPlayingContainer,
  CurrentlyPlayingLoadingWrapper,
} from '@components/CurrentlyPlayingV2/CurrentlyPlaying.styles';
import { SkeletonProfile, SkeletonTile } from '@ui/Skeleton';

const CurrentlyPlayingLoading = () => {
  return (
    <CurrentlyPlayingContainer>
      <CurrentlyPlayingLoadingWrapper>
        <SkeletonProfile />
        <div>
          <SkeletonTile width="80px" />
          <SkeletonTile width="80px" height="6px" />
        </div>
      </CurrentlyPlayingLoadingWrapper>
    </CurrentlyPlayingContainer>
  );
};

export default CurrentlyPlayingLoading;
