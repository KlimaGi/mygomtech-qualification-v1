import { render, screen } from "@testing-library/react";
import ItemIcon from "../../components/UsersManagement/components/List/components/ItemIcon";

describe("ItemIcon", () => {
  fit("should render item name first two letters", () => {
    const itemName = "Letter";
    render(<ItemIcon name={itemName} />);
    expect(screen.getByText(/Le/)).toBeInTheDocument();
  });
});
