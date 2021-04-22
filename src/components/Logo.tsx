import React from 'react';
import styled from 'styled-components';

const LogoH1 = styled.h1`
  color: ${props => props.theme.primary};
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 4rem;
`;

export const Logo: React.FC = () => {
  return <LogoH1>{process.env.REACT_APP_TITLE}</LogoH1>;
};
