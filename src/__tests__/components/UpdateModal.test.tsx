import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import UpdateModal from "../../components/UsersManagement/components/List/components/UpdateModal";
import { arr } from "../../fixtures/data";
import List from "../../components/UsersManagement/components/List/List";

describe("UpdateModal", () => {
  beforeEach(() => {
    const item = arr[0];
    //arr[0]- email: "email1234"
    const updateEmail = jest.fn(() => "jonaitis@mail.com");
    render(<UpdateModal item={item} updateEmail={updateEmail} />);
  });

  it("should render button with name 'Update Email'", () => {
    expect(screen.getByText(/update email/i)).toBeInTheDocument();
  });

  it("should open modal when user clicks the btn", () => {
    user.click(screen.getByText(/update email/i));
    expect(screen.getByDisplayValue(/email1234/i)).toBeInTheDocument();
    expect(screen.getByText(/change/i)).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  });

  it("should close the modal, when user clicks the cancel btn", () => {
    user.click(screen.getByText(/update email/i));
    fireEvent.click(screen.getByText(/cancel/i));
    expect(screen.queryByText("Cancel")).not.toBeInTheDocument();
  });

  it("should close the modal, when user clicks the change btn", () => {
    user.click(screen.getByText(/update email/i));
    fireEvent.click(screen.getByText(/change/i));
    waitForElementToBeRemoved(() => screen.queryByText("Change"));
  });
});
