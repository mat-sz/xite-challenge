import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div<{ background: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0.2;

  div {
    width: 100%;
    height: 100%;
    background: url(${props => props.background});
    background-size: cover;
    background-position: center center;
    filter: blur(25px);
  }
`;

export interface BackgroundProps {
  image: string;
  title: string;
}

export const Background: React.FC<BackgroundProps> = ({ image, title }) => {
  return (
    <BackgroundWrapper background={image}>
      <div></div>
    </BackgroundWrapper>
  );
};
