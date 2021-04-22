import { Store } from 'redux';
import { ActionType } from '../types/ActionType';
import {
  ActionModel,
  DataModel,
  GenreModel,
  VideoModel,
} from '../types/Models';

export interface StateType {
  loading: boolean;
  error?: string;
  videos?: VideoModel[];
  genres?: GenreModel[];
  searchTitle: string;
  searchGenreIds?: number[];
  searchYear?: number;
  searchResults?: VideoModel[];
}

let initialState: StateType = {
  loading: true,
  searchTitle: '',
};

export type StoreType = Store<StateType, ActionModel>;

export function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    case ActionType.SET_DATA:
      const data = action.value as DataModel;
      newState.genres = data.genres;
      newState.videos = data.videos;
      newState.error = undefined;
      newState.loading = false;
      break;
    case ActionType.SET_ERROR:
      newState.genres = undefined;
      newState.videos = undefined;
      newState.error = action.value as string;
      newState.loading = false;
      break;
    case ActionType.SET_SEARCH_TITLE:
      newState.searchTitle = action.value;
      break;
    case ActionType.SET_SEARCH_GENRE_IDS:
      newState.searchGenreIds = action.value;
      break;
    case ActionType.SET_SEARCH_YEAR:
      newState.searchYear = action.value;
      break;
    case ActionType.TOGGLE_GENRE_ID:
      const genreId = action.value as number;

      if (!newState.searchGenreIds) {
        newState.searchGenreIds = [];
      }

      if (newState.searchGenreIds.includes(genreId)) {
        newState.searchGenreIds = newState.searchGenreIds.filter(
          id => id !== genreId
        );
      } else {
        newState.searchGenreIds = [...newState.searchGenreIds, genreId];
      }
      break;
    default:
      return state;
  }

  if (
    newState.videos &&
    newState.videos.length > 0 &&
    (newState.searchTitle ||
      newState.searchGenreIds?.length ||
      newState.searchYear)
  ) {
    newState.searchResults = newState.videos.filter(video => {
      const lowerCaseSearchTitle = newState.searchTitle.toLowerCase();
      if (
        !video.title.toString().toLowerCase().includes(lowerCaseSearchTitle) &&
        !video.artist.toString().toLowerCase().includes(lowerCaseSearchTitle)
      ) {
        return false;
      }

      if (
        newState.searchGenreIds &&
        newState.searchGenreIds.length > 0 &&
        !newState.searchGenreIds.includes(video.genre_id)
      ) {
        return false;
      }

      if (newState.searchYear && video.release_year !== newState.searchYear) {
        return false;
      }

      return true;
    });
  } else {
    newState.searchResults = undefined;
  }

  return newState;
}
