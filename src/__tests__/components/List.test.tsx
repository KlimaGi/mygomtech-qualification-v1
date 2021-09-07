import { render, getAllByRole } from "@testing-library/react";
import List from "../../components/UsersManagement/components/List/List";
import { arr } from "../../fixtures/data";
describe("List", () => {
  it("should render all items list, length 10", () => {
    const items = arr;
    const { getAllByTestId } = render(<List items={items} />);
    const allNames = getAllByTestId("item-name").map((li) => li.textContent);
    expect(allNames).toHaveLength(10);
  });
});
