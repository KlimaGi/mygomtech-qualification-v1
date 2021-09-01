import { render, screen, cleanup } from "@testing-library/react";
import user from "@testing-library/user-event";
import Header from "../../components/UsersManagement/components/Header/Header";
import { arr } from "../../fixtures/data";

describe("Header", () => {
  beforeEach(() => {
    render(<Header items={arr} username="Mouse" />);
  });
  afterEach(cleanup);

  it("should display header text", () => {
    expect(screen.getByText(/emails are wrong/i)).toBeInTheDocument();
  });

  it.todo("should call right function");

  it("should display logout button", () => {
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it("should display logout button with username 'Mouse'", () => {
    expect(screen.getByText(/mouse/i)).toBeInTheDocument();
  });
});
