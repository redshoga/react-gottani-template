import { Action } from "redux";

// action types
const INCREMENT = "COUNTER_INCREMENT";
const DECREMENT = "COUNTER_DECREMENT";

interface IncrementAction extends Action {
  type: typeof INCREMENT;
}

interface DecrementAction extends Action {
  type: typeof DECREMENT;
}

export type ActionTypes = IncrementAction | DecrementAction;

// action creator
const increment: () => ActionTypes = () => {
  return { type: INCREMENT };
};

const decrement: () => ActionTypes = () => {
  return { type: DECREMENT };
};

export const actionCreator = {
  increment,
  decrement
};

// state
export interface State {
  count: number;
}
export const initialState: State = {
  count: 123
};

// reducer
export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
