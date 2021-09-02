import { fireEvent, render, screen } from "@testing-library/react";
import FilterTab from "../../components/UsersManagement/components/Filter/components/FilterTab";

describe("FilterTab", () => {
  fit("should ", () => {
    const onClick = jest.fn();
    const { getByText } = render(<div onClick={onClick}>Wrong(2)</div>);
    fireEvent.click(getByText("Wrong(2)"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
