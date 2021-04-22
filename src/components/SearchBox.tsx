import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setSearchTitleAction } from '../actions/search';
import { StateType } from '../reducers';

const SearchBoxInput = styled.input`
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.secondary};
  border-bottom-color: ${props => props.theme.primary};
  background: ${props => props.theme.secondary};
  font-size: 1.5rem;
  padding: 0.4rem 0.6rem;
  max-width: 700px;
  width: 100%;
  margin-bottom: 2rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
  transition: 0.2s ease-in-out all;

  :hover,
  :focus {
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const SearchBox: React.FC = () => {
  const searchTitle = useSelector((state: StateType) => state.searchTitle);
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchTitleAction(e.target.value));
    },
    [dispatch]
  );

  return (
    <SearchBoxInput
      value={searchTitle}
      onChange={onChange}
      placeholder="Start typing to search..."
    />
  );
};
