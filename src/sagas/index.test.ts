import fetchMock from 'jest-fetch-mock';

import { StoreType } from '../reducers';
import { newStore } from '../store';
import { mockData } from '../mockData';

fetchMock.enableMocks();

describe('sagas', () => {
  it('retrieve the data', done => {
    const mock = fetchMock.mockOnce(JSON.stringify(mockData));

    const store: StoreType = newStore();
    store.subscribe(() => {
      const state = store.getState();

      if (!state.loading) {
        expect(state.loading).toBe(false);
        expect(state.error).toBeUndefined();
        expect(state.videos?.length).toBeGreaterThan(0);
        expect(state.genres?.length).toBeGreaterThan(0);

        done();
      }
    });

    expect(mock).toBeCalled();
  });

  it('handle errors', done => {
    const mock = fetchMock.mockRejectOnce();

    const store: StoreType = newStore();
    store.subscribe(() => {
      const state = store.getState();

      if (!state.loading) {
        expect(state.loading).toBe(false);
        expect(state.error).not.toBeUndefined();
        expect(state.videos).toBeUndefined();
        expect(state.genres).toBeUndefined();

        done();
      }
    });

    expect(mock).toBeCalled();
  });
});
