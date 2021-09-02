import Filter from "../../components/UsersManagement/components/Filter/Filter";
import FilterTab from "../../components/UsersManagement/components/Filter/components/FilterTab";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Filter", () => {
  it("should display tab element with correct name and count", () => {
    render(<FilterTab title="all" count={3} path="/items" />);
    expect(screen.getByText(/all/i)).toBeInTheDocument();
  });

  it("renders FilterTab with function parameter", () => {
    const oneFn = jest.fn(() => 3);
    render(<FilterTab title="some" count={oneFn()} path={"/wrong"} />);
    expect(oneFn).toHaveBeenCalledTimes(1);
  });
});
