import { render, screen } from "@testing-library/react";
import FilterTab from "../../components/UsersManagement/components/Filter/components/FilterTab";

describe("FilterTab", () => {
  fit("should display tab element with correct name and count", () => {
    render(<FilterTab title="all" count={3} path="/items" />);
    expect(screen.getByText(/all/i)).toBeInTheDocument();
  });
});
