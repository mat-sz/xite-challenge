import { ActionType } from '../types/ActionType';
import { ActionModel } from '../types/Models';

export function setSearchTitleAction(title: string): ActionModel {
  return {
    type: ActionType.SET_SEARCH_TITLE,
    value: title,
  };
}

export function setSearchGenreIdsAction(genreIds: number[]): ActionModel {
  return {
    type: ActionType.SET_SEARCH_GENRE_IDS,
    value: genreIds,
  };
}

export function setSearchYearAction(year?: number): ActionModel {
  return {
    type: ActionType.SET_SEARCH_YEAR,
    value: year,
  };
}
