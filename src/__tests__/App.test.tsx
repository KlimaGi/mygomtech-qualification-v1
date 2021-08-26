import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import App from "../App";

describe("App", () => {
  test("should display login blank", () => {
    render(<App />);
    expect(screen.getByText(/mygom.tech/i)).toBeInTheDocument();
  });

  test("", () => {});
});
