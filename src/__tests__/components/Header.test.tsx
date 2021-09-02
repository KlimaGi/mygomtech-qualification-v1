import {
  render,
  screen,
  cleanup,
  waitForElementToBeRemoved,
  queryByText,
} from "@testing-library/react";
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

  it.todo(
    "should call right function"
    // , () => {
    //   const wrongItemsCount = jest.fn();
    //   render(<h1>{wrongItemsCount}</h1>);
    //   screen.getByRole("heading", {
    //     name: "5 Emails are wrong",
    //   });
    //   expect(wrongItemsCount).toHaveBeenCalledTimes(1);
    // }
  );

  it("should display logout button", () => {
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it("should display logout button with username 'Mouse'", () => {
    expect(screen.getByText(/mouse/i)).toBeInTheDocument();
  });

  // fit("should remove header from page, when user clicks the logout button", () => {
  //   user.click(screen.getByText(/logout/i));

  //   expect(screen.getByText(/logout/i)).not.toBeInTheDocument();
  // });
});
