import { arr } from "../fixtures/data";
import itemHasReusedEmail from "../../src/utils/itemHasReusedEmail";

test("should return true when given item have reused email", () => {
  const check = itemHasReusedEmail(arr[2], arr);
  expect(check).toBe(true);
});
