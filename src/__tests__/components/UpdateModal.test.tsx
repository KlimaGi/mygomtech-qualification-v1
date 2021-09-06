import { render, screen, cleanup, fireEvent } from "@testing-library/react";
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

  fit("should show modal when user clicks the btn ", () => {
    const setShowModal = jest.fn();
    const text = "Update email";
    render(<button onClick={() => setShowModal}>Update Email</button>);
    fireEvent.click(screen.getByText(text));
    expect(setShowModal).toHaveBeenCalledTimes(1);
    //expect(screen.getByText(text)).toBeInTheDocument();
  });
});
