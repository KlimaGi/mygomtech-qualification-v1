import {
  render,
  screen,
  cleanup,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import Login from "../../components/Login/Login";

describe("Login", () => {
  beforeEach(() => {
    render(<Login />);
  });
  afterEach(cleanup);

  it("should display empty input of username, password", () => {
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
      expect(screen.getByRole("textbox")).toHaveAttribute("value", "some");
    });

    it("should correctly receive password filed with entered text", () => {
      user.type(screen.getByPlaceholderText(/password/i), "somepsw");
      expect(screen.getByPlaceholderText(/password/i)).toHaveAttribute(
        "value",
        "somepsw"
      );
    });
  });

  describe("when the user enters input fields incorrectly", () => {
    afterEach(async () => {
      await waitFor(() =>
        expect(
          screen.getByText(/your username or password is incorrect/i)
        ).toBeInTheDocument()
      );
    });

    it("should show error text, when user leave empty inputs and click the btn", () => {
      user.type(screen.getByPlaceholderText(/username/i), "");
      user.type(screen.getByPlaceholderText(/password/i), "");

      user.click(screen.getByText(/login/i));

      expect(
        screen.getByText(/your username is required/i)
      ).toBeInTheDocument();

      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });

    it("should show error text when the user enters special characters instead letters in username field", () => {
      user.type(screen.getByPlaceholderText(/username/i), "!@text");

      user.click(screen.getByText(/login/i));

      expect(
        screen.getByText(/your username can not have this speacial character/i)
      ).toBeInTheDocument();
    });

    it("should show error text when the user enters less than 3 letters in username field", () => {
      user.type(screen.getByPlaceholderText(/username/i), "wu");

      user.click(screen.getByText(/login/i));

      expect(
        screen.getByText(/your username should have at least 3 letters/i)
      ).toBeInTheDocument();
    });

    it("should show error text when the user enters less than 3 symbols in password field", () => {
      user.type(screen.getByPlaceholderText(/password/i), "ww");

      user.click(screen.getByText(/login/i));

      expect(
        screen.getByText(/your password should be longer/i)
      ).toBeInTheDocument();
    });
  });

  it("should remove login form when the user enters correct username and password", () => {
    user.type(screen.getByPlaceholderText(/username/i), "admin");
    user.type(screen.getByPlaceholderText(/password/i), "admin");
    user.click(screen.getByText(/login/i));

    waitForElementToBeRemoved(() => screen.queryByText("Mygom.tech"));
  });
});
