import { connect } from "react-redux";
import { RootState, actionCreator } from "../modules";
import { Counter } from "../components/Counter/Counter";
import { Dispatch } from "react";
import { Action } from "redux";

const mapStateToProps = (rootState: RootState) => {
  return {
    counter: rootState.counter.count
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    increment: () => dispatch(actionCreator.counter.increment()),
    decrement: () => dispatch(actionCreator.counter.decrement())
  };
};

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
