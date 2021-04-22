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
}

let initialState: StateType = {
  loading: true,
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
    default:
      return state;
  }

  return newState;
}
