import * as projectState from '../actions/project-state-example';

export interface State {
  projectState: boolean;
}

const initialState: State = {
  projectState: true,
};

export function reducer(state = initialState, action: projectState.Actions): State {
  switch (action.type) {
    case projectState.ActionTypes.ADD_STATE_OBJECT: {
      console.log("Add state object");
      return state;
    }
    default:
      return state;
  }
}

export const getProjectState = (state: State) => state.projectState;
