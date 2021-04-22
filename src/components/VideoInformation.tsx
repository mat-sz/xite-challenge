import React from 'react';
import styled from 'styled-components';
import { VideoModel } from '../types/Models';

const VideoInfo = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 100%
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

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }
`;

export interface VideoInformationProps {
  video: VideoModel;
}

export const VideoInformation: React.FC<VideoInformationProps> = ({
  video,
}) => {
  return (
    <VideoInfo>
      <h2>{video.artist}</h2>
      <h3>{video.title}</h3>
      <div>Could be better with a description here or something :)</div>
    </VideoInfo>
  );
};
