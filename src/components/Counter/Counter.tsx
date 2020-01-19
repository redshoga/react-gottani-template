import React from "react";

export type Props = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export enum TestAttr {
  Counter = "Counter",
  IncrementButton = "IncrementButton",
  DecrementButton = "DecrementButton"
}

export class Counter extends React.Component<Props> {
  render() {
    const { increment, decrement, counter } = this.props;
    return (
      <>
        <div>
          <button data-test={TestAttr.IncrementButton} onClick={increment}>
            increment
          </button>
        </div>
        <div>
          <button data-test={TestAttr.DecrementButton} onClick={decrement}>
            decrement
          </button>
        </div>
        count: <span data-test={TestAttr.Counter}>{counter}</span>
      </>
    );
  }
}
