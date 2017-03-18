import * as fromSettings from './settings';
import * as fromGrantApplications from './project-state-example';
import { environment } from '../../environments/environment';

import { createSelector } from 'reselect';

import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';
import * as fromRouter from '@ngrx/router-store';

export interface State {
  settings: fromSettings.State;
  grantApplications: fromGrantApplications.State;
  router: fromRouter.RouterState;
}

const reducers = {
  settings: fromSettings.reducer,
  grantApplications: fromGrantApplications.reducer,
  router: fromRouter.routerReducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}


// Settings Reducers
export const getSettingsState = (state: State) => state.settings;
export const getIsDarkTheme = createSelector(getSettingsState, fromSettings.getIsDarkTheme);
