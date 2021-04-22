import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleGenreIdAction } from '../actions/search';
import { StateType } from '../reducers';
import { GenreModel } from '../types/Models';

const GenreDiv = styled.div<{ active: boolean }>`
  display: inline-block;
  border: 2px solid ${props => props.theme.secondary}};
  border-bottom-color: ${props =>
    props.active ? props.theme.primary : props.theme.secondary}};
  background: ${props => props.theme.secondary};
  font-size: 0.8rem;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  margin: 0.2rem;
  user-select: none;
`;

export interface GenreProps {
  genre: GenreModel;
}

export const Genre: React.FC<GenreProps> = ({ genre }) => {
  const active = useSelector(
    (state: StateType) => !!state.searchGenreIds?.includes(genre.id)
  );
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(toggleGenreIdAction(genre.id));
  }, [dispatch, genre]);

  return (
    <GenreDiv onClick={onClick} active={active}>
      {genre.name}
    </GenreDiv>
  );
};
