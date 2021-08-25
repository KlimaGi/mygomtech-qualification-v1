import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../App";

describe("App", () => {
  test("should display login blank", () => {
    const history = createMemoryHistory();
    render(<App />);
    expect(screen.getByText(/mygom.tech/i)).toBeInTheDocument();
  });
});
