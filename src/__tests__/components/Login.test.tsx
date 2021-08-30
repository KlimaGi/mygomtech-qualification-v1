import { render, screen, cleanup } from "@testing-library/react";
import user from "@testing-library/user-event";
import Login from "../../components/Login/Login";

describe("Login", () => {
  beforeEach(() => {
    render(<Login />);
  });
  afterEach(cleanup);

  it("should display empty input of username, password", () => {
    render(<Login />);
    expect(screen.getAllByPlaceholderText(/username/i));
    expect(screen.getAllByPlaceholderText(/password/i));
  });

  it("should display button with name 'Login'", () => {
    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    );
  });

  describe("when the user enter text in input fields", () => {
    it("should show input with the user entered username", () => {
      user.type(screen.getByPlaceholderText(/username/i), "some");
      expect(screen.getByRole("textbox")).toHaveValue("some");
    });

    it("should show error text, when user leave empty input and click the btn", () => {
      user.type(screen.getByPlaceholderText(/username/i), "");
      user.type(screen.getByPlaceholderText(/password/i), "");

      user.click(screen.getByText(/login/i));

      expect(
        screen.getByText(/your username is required/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();

      // await screen.findByText("Clicked twice");
    });
  });
});
