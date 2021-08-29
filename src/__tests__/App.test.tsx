import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should display login blank", () => {
    render(<App />);
    expect(screen.getByText(/mygom.tech/i)).toBeInTheDocument();
  });
});
