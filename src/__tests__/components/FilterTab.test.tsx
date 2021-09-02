import { fireEvent, render, screen } from "@testing-library/react";
import FilterTab from "../../components/UsersManagement/components/Filter/components/FilterTab";

describe("FilterTab", () => {
  beforeEach(() => {
    render(<FilterTab title="some" count={3} path={"/wrong"} />);
  });
  fit("should call right function", () => {
    const onClick = jest.fn();
    const { getByText } = render(<div onClick={onClick}>Wrong(2)</div>);
    fireEvent.click(getByText("Wrong(2)"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it.todo("should show right list content when user clicks the filterTab btn");

  // use async, fetch
});
