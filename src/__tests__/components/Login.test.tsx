import { render, screen, cleanup } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Routes } from "../../constants";
import Login from "../../components/Login/Login";

afterEach(cleanup);

describe("Login", () => {
  beforeEach(() => {
    let history = createMemoryHistory();
    history.push(Routes.Users);
  });

  it("should display empty username input", () => {
    render(<Login />);
    //const elem = getByText(/username/i);
    expect(screen.getAllByPlaceholderText(/username/i));
  });

  it.todo(
    "should display empty password input"
    // () => {
    //   //expect(screen.getAllByPlaceholderText(/password/i));
    // }
  );

  it.todo(
    "should display button with name 'Login'"
    //  () => {
    //   expect(
    //     screen.getByRole("button", {
    //       name: /login/i,
    //     })
    //   );
    // }
  );
});
