import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

test("render", () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});

test("fire an `onClick` event", () => {
  const onClick = jest.fn();

  const { container } = render(<Button onClick={onClick} />);

  const button = container.querySelector("button");

  expect(onClick).toHaveBeenCalledTimes(0);
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test("render disabled button", () => {
  const { container } = render(<Button disabled={true} />);
  const button = container.querySelector("button");
  expect(button).toBeDisabled();
});
