import * as Counter from "./Counter";
import * as Posts from "./Posts";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { sagas as postsSagas } from "./Posts.saga";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  counter: Counter.State;
  posts: Posts.State;
}

export const initialState: RootState = {
  counter: Counter.initialState,
  posts: Posts.initialState
};

export const reducers = {
  counter: Counter.reducer,
  posts: Posts.reducer
};

export const actionCreator = {
  counter: Counter.actionCreator,
  posts: Posts.actionCreator
};

export const store = createStore(
  combineReducers<RootState>(reducers),
  applyMiddleware(sagaMiddleware)
);

// https://github.com/redux-saga/redux-saga/issues/160
export const rootSaga = function*() {
  yield all([...postsSagas]);
};

sagaMiddleware.run(rootSaga);
