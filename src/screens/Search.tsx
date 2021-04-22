import React from 'react';
import { useSelector } from 'react-redux';

import { Screen } from '../components/Screen';
import { Logo } from '../components/Logo';
import { SearchBox } from '../components/SearchBox';
import { FlexCenter } from '../components/FlexCenter';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { StateType } from '../reducers';
import { SearchResults } from '../components/SearchResults';

export const Search: React.FC = () => {
  const searchTitle = useSelector((state: StateType) => state.searchTitle);
  const error = useSelector((state: StateType) => state.error);
  const loading = useSelector((state: StateType) => state.loading);

  return (
    <Screen>
      <Logo />
      <FlexCenter>
        <SearchBox />
      </FlexCenter>
      <FlexCenter>
        {!!searchTitle && loading && <Loading />}
        {!!error && (
          <Error>
            <strong>Error: </strong> {error}
          </Error>
        )}
      </FlexCenter>
      <SearchResults />
    </Screen>
  );
};
