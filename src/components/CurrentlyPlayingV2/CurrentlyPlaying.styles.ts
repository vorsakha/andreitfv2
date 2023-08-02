import styled from 'styled-components';

export const CurrentlyPlayingContainer = styled.div`
  margin: 24px 0;
  width: 150px;
`;
export const CurrentlyPlayingWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
  border-radius: 4px;
  gap: 4px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
`;
export const CurrentlyPlayingImageWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 4px;
    object-fit: cover;
    width: 36px;
    height: 36px;
    filter: grayscale(100%);
  }

  svg {
    filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5));
  }
`;
export const CurrentlyPlayingContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
`;
export const CurrentlyPlayingSong = styled.p`
  font-size: 12px;
  text-decoration: underline;
  line-height: 10px;
  max-width: calc(150px - 40px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: flex-start;
`;
export const CurrentlyPlayingArtist = styled.p`
  font-size: 10px;
  line-height: 10px;
  color: ${({ theme }) => theme.colors.gray.solid};
  text-shadow: none;
  max-width: calc(150px - 40px - 16px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: flex-start;
`;
export const CurrentlyPlayingIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: -20px;
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5));
  display: flex;
  justify-content: flex-end;
`;
