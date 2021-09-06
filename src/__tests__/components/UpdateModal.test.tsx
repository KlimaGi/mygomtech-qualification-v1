import { render, screen, cleanup } from "@testing-library/react";
import UpdateModal from "../../components/UsersManagement/components/List/components/UpdateModal";
import { arr } from "../../fixtures/data";

describe("UpdateModal", () => {
  // beforeEach(() => {
  //   const item = arr[0];
  //   const updateEmail = jest.fn(() => "jonaitis@mail.com");
  //   render(<UpdateModal item={item} updateEmail={updateEmail} />);
  // });
  // afterEach(cleanup);

  fit("should render button with name 'Update Email'", () => {
    const item = arr[0];
    const updateEmail = jest.fn(() => "jonaitis@mail.com");
    render(<UpdateModal item={item} updateEmail={updateEmail} />);
    expect(screen.getByText(/update email/i)).toBeInTheDocument();
  });
});
