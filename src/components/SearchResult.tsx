import React from 'react';
import styled from 'styled-components';
import { VideoModel } from '../types/Models';

const SearchResultWrapper = styled.div<{ background: string }>`
  background: url(${props => props.background});
  background-color: ${props => props.theme.secondary};
  background-size: cover;
  background-position: center center;
  position: relative;
  height: 12rem;
  cursor: pointer;
  filter: grayscale(50%);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
  transition: 0.2s ease-in-out all;

  :hover {
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.4);
    filter: grayscale(0%);
  }
`;

const SearchResultInfo = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  pointer-events: none;
  user-select: none;
  padding-top: 2rem;

  h2,
  h3 {
    margin: 0;
    font-weight: 400;
  }
`;

export interface SearchResultProps {
  video: VideoModel;
}

export const SearchResult: React.FC<SearchResultProps> = ({ video }) => {
  return (
    <SearchResultWrapper background={video.image_url}>
      <SearchResultInfo>
        <h2>{video.artist}</h2>
        <h3>{video.title}</h3>
      </SearchResultInfo>
    </SearchResultWrapper>
  );
};
