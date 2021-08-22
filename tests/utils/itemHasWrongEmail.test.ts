import { arr } from "../fixtures/data";
import itemHasWrongEmail from "../../src/utils/itemHasWrongEmail";

test("should return items with wrong emails", () => {
  const check = itemHasWrongEmail(arr);
  expect(check).toHaveLength(4);
});
