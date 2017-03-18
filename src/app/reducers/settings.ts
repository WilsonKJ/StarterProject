import * as settings from '../actions/settings';

export interface State {
  isDarkTheme: boolean;
}

const initialState: State = {
  isDarkTheme: false,
};

export function reducer(state = initialState, action: settings.Actions): State {
  switch (action.type) {
    case settings.ActionTypes.TOGGLE_THEME:
      return {
        isDarkTheme: !state.isDarkTheme
      };
    default:
      return state;
  }
}

export const getIsDarkTheme = (state: State) => state.isDarkTheme;
