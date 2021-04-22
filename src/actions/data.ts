import { ActionType } from '../types/ActionType';
import { ActionModel, DataModel } from '../types/Models';

export function setDataAction(data: DataModel): ActionModel {
  return {
    type: ActionType.SET_DATA,
    value: data,
  };
}

export function setErrorAction(error: string): ActionModel {
  return {
    type: ActionType.SET_ERROR,
    value: error,
  };
}
