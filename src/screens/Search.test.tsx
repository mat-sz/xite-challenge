import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { act } from 'react-dom/test-utils';

import { StoreType } from '../reducers';
import { newStore } from '../store';
import { Search } from './Search';
import { mockData } from '../mockData';

fetchMock.enableMocks();

describe('Search', () => {
  it('filters by video title', async () => {
    const mock = fetchMock.mockOnce(JSON.stringify(mockData));

    const store: StoreType = newStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
    );

    await act(async () => {
      const textInput = await screen.findByPlaceholderText(/search/i);

      fireEvent.change(textInput, {
        target: { value: 'TEST' },
      });
    });

    expect(mock).toBeCalled();

    await act(async () => {
      const titleElements = await screen.findAllByText(/TEST/i);

      expect(titleElements.length).toBe(1);
    });
  });

  it('filters by genre', async () => {
    const mock = fetchMock.mockOnce(JSON.stringify(mockData));

    const store: StoreType = newStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </Provider>
    );

    await act(async () => {
      const genreDiv = await screen.findByText(/ABC/i);

      genreDiv.click();
    });

    expect(mock).toBeCalled();

    await act(async () => {
      const titleElements = await screen.findAllByText(/TEST/i);

      expect(titleElements.length).toBe(1);
    });
  });
});
