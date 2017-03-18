import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  ADD_STATE_OBJECT:   type('[ProjectState] Add State Object'),
};

export class AddStateObjectAction implements Action {
  type = ActionTypes.ADD_STATE_OBJECT;
}

export type Actions
  = AddStateObjectAction;
