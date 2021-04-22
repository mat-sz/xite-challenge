import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { VideoModel } from '../types/Models';

const BackLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-size: 2rem;
  position: absolute;
  padding: 1rem;

  &:hover {
    color: #bbb;
  }
`;

export const Back: React.FC = () => {
  return <BackLink to="/search">Back</BackLink>;
};
