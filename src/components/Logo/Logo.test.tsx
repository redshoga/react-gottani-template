import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Logo, TestAttr } from "./Logo";
import { select } from "../../testUtils";

describe("Logo", () => {
  let shallowWrapper: ShallowWrapper = shallow(<Logo />);

  test("The title should be `Hello React`", () => {
    const title = shallowWrapper.find(select(TestAttr.Title)).text();
    expect(title).toBe("Hello React");
  });
});

// Default test code of `create-react-app`

// import React from "react";
// import { render } from "@testing-library/react";
// import { Logo } from "./Logo";

// test("renders learn react link", () => {
//   const { getByText } = render(<Logo />);
//   const linkElement = getByText(/Hello React/i);
//   expect(linkElement).toBeInTheDocument();
// });
