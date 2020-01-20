import reducerTester from "reducer-tester";
import { reducer, initialState, actionCreator } from "./Counter";

describe("Counter", () => {
  reducerTester({
    reducer,
    state: initialState,
    tests: [actionCreator.decrement(), actionCreator.increment()]
  });
});
