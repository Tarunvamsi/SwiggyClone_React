import { sum } from "../sum";

test("Sum calculation", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
