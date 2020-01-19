import { Action } from "redux";

// action types
export const ActionTypeName = {
  INCREMENT: "Counter/INCREMENT",
  DECREMENT: "Counter/DECREMENT"
};

interface IncrementAction extends Action {
  type: typeof ActionTypeName.INCREMENT;
}

interface DecrementAction extends Action {
  type: typeof ActionTypeName.DECREMENT;
}

export type ActionTypes = IncrementAction | DecrementAction;

// action creator
const increment: () => ActionTypes = () => {
  return { type: ActionTypeName.INCREMENT };
};

const decrement: () => ActionTypes = () => {
  return { type: ActionTypeName.DECREMENT };
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
    case ActionTypeName.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionTypeName.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
