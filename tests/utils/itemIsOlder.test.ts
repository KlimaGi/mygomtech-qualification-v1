import { arr } from "../fixtures/data";
import itemIsOlder from "../../src/utils/itemIsOlder";

test("should return true when given item have reused email", () => {
  const check = itemIsOlder(arr);
  expect(check).toHaveLength(2);
});
