import styled from 'styled-components';

export const Screen = styled.div`
  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
