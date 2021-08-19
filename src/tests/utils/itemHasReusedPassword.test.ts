import { arr } from "../fixtures/data";
import itemHasReusedEmail from "../../utils/itemHasReusedEmail";

test("should return items with reused passwords", () => {
  const check = itemHasReusedEmail(arr[2], arr);
  expect(check).toBe(true);
});
