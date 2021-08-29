import { sum } from "../../services/sum";

test("5 + 2 = 7", () => {
  expect(sum(5, 2)).toBe(7);
});
