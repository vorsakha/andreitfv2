import styled from 'styled-components';

export const CurrentlyPlayingContainer = styled.div`
  margin: 24px 0;
`;

export const CurrentlyPlayingWrapper = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: start;
  margin: 1rem 0;
  border-radius: 4px;
  gap: 10px;
  text-decoration: none;
`;

export const CurrentlyPlayingImageWrapper = styled.div`
  img {
    border-radius: 4px;
    object-fit: cover;
    width: 64px;
    height: 64px;
  }

  svg {
    filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5));
  }
`;
export const CurrentlyPlayingContentWrapper = styled.div`
  padding-right: 30px;
  position: relative;
`;
export const CurrentlyPlayingSong = styled.p`
  text-decoration: underline;
  line-height: 1rem;
`;
export const CurrentlyPlayingArtist = styled.small`
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.gray.solid};
  text-shadow: none;
`;
export const CurrentlyPlayingIcon = styled.div`
  position: absolute;
  bottom: 0px;
  right: 2px;
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5));
`;
