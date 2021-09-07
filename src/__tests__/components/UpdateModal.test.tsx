import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import UpdateModal from "../../components/UsersManagement/components/List/components/UpdateModal";
import { arr } from "../../fixtures/data";

describe("UpdateModal", () => {
  beforeEach(() => {
    const item = arr[0];
    const updateEmail = jest.fn(() => "jonaitis@mail.com");
    render(<UpdateModal item={item} updateEmail={updateEmail} />);
  });

  it("should render button with name 'Update Email'", () => {
    expect(screen.getByText(/update email/i)).toBeInTheDocument();
  });

  it("should open modal when user clicks the btn", () => {
    user.click(screen.getByText(/update email/i));
    expect(screen.getByText(/change/i)).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  });
});
