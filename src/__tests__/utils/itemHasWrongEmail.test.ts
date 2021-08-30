import { arr } from "../../fixtures/data";
import itemHasWrongEmail from "../../utils/itemHasWrongEmail";

test("should return items with wrong emails", () => {
  const check = itemHasWrongEmail(arr);
  expect(check).toHaveLength(4);
});
