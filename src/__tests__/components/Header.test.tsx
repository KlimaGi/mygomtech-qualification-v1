import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import Header from "../../components/UsersManagement/components/Header/Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header items={[]} username="Mouse" />);
  });
  afterEach(cleanup);

  it("should display header text", () => {
    expect(screen.getByText(/emails are wrong/i)).toBeInTheDocument();
  });

  it("should display logout button", () => {
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it("should display logout button with username 'Mouse'", () => {
    expect(screen.getByText(/mouse/i)).toBeInTheDocument();
  });
});
describe("Header logout btn", () => {
  it("should call right function when user clicks logout btn", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <button onClick={handleClick}>Logout Mouse</button>
    );
    user.click(getByText(/logout mouse/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
