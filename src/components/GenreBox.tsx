import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { StateType } from '../reducers';
import { Genre } from './Genre';

const GenreBoxWrapper = styled.div`
  max-width: calc(700px + 0.4rem);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0.8rem;
  margin-bottom: 2rem;
`;

export const GenreBox: React.FC = () => {
  const genres = useSelector((state: StateType) => state.genres);

  if (!genres) {
    return null;
  }

  return (
    <GenreBoxWrapper>
      {genres.map(genre => (
        <Genre genre={genre} key={genre.id} />
      ))}
    </GenreBoxWrapper>
  );
};
