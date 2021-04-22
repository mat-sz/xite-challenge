import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { SearchResult } from './SearchResult';
import { StateType } from '../reducers';

const SearchResultsCount = styled.div`
  text-align: center;
  font-size: 0.8rem;
`;

const SearchResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const SearchResults: React.FC = () => {
  const searchResults = useSelector((state: StateType) => state.searchResults);
  const count = useSelector((state: StateType) => state.videos?.length);

  if (!Array.isArray(searchResults)) {
    return null;
  }

  return (
    <>
      <SearchResultsCount>
        {searchResults.length === 0
          ? 'No videos found. Try a different query.'
          : searchResults.length === 1
          ? `Displaying 1 video out of ${count}.`
          : `Displaying ${searchResults.length} videos out of ${count}.`}
      </SearchResultsCount>
      <SearchResultsGrid>
        {searchResults.map(video => (
          <SearchResult video={video} key={video.id} />
        ))}
      </SearchResultsGrid>
    </>
  );
};
