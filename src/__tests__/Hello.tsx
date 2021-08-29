import { render, screen } from "@testing-library/react";
import React from "react";
import { Hello } from "../components/Hello";

it('renders "Hello world"', () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello World/);
  expect(myElement).toBeInTheDocument();
});
