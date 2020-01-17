import * as Counter from "./Counter";
import { createStore, combineReducers } from "redux";

export interface RootState {
  counter: Counter.State;
}

export const initialState: RootState = {
  counter: Counter.initialState
};

export const reducers = {
  counter: Counter.reducer
};

export const actionCreator = {
  counter: Counter.actionCreator
};

export const store = createStore(combineReducers<RootState>(reducers));
