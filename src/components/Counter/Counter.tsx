import React from "react";

type Props = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export class Counter extends React.Component<Props> {
  render() {
    const { increment, decrement, counter } = this.props;
    return (
      <>
        <div>
          <button onClick={increment}>increment</button>
        </div>
        <div>
          <button onClick={decrement}>decrement</button>
        </div>
        count: {counter}
      </>
    );
  }
}
