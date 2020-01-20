import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Counter, Props, TestAttr } from "./Counter";
import { select } from "../../testUtils";

describe("<Counter />", () => {
  const mockProps: Props = {
    counter: 123,
    increment: jest.fn(),
    decrement: jest.fn()
  };
  let shallowWrapper: ShallowWrapper = shallow(<Counter {...mockProps} />);

  test("The counter value should be rendered", () => {
    const counterValue = shallowWrapper.find(select(TestAttr.Counter)).text();
    expect(counterValue).toBe(String(mockProps.counter));
  });

  describe("Click buttons", () => {
    test("The increment() of props should be called when increment button is clicked", () => {
      expect(mockProps.increment).toBeCalledTimes(0);
      shallowWrapper.find(select(TestAttr.IncrementButton)).simulate("click");
      expect(mockProps.increment).toBeCalledTimes(1);
    });

    test("The decrement() of props should be called when decrement button is clicked", () => {
      expect(mockProps.decrement).toBeCalledTimes(0);
      shallowWrapper.find(select(TestAttr.DecrementButton)).simulate("click");
      expect(mockProps.decrement).toBeCalledTimes(1);
    });
  });
});
