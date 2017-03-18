import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  TOGGLE_THEME:   type('[Settings] Toggle Theme'),
};

export class ToggleThemeAction implements Action {
  type = ActionTypes.TOGGLE_THEME;
}

export type Actions
  = ToggleThemeAction;
