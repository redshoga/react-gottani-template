import React from "react";
import { Counter } from "./Counter";

export default {
  title: "Counter",
  component: Counter
};

const mockProps = {
  counter: 123,
  increment: () => {},
  decrement: () => {}
};

export const Default = () => <Counter {...mockProps} />;
