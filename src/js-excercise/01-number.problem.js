import { expect, it } from "vitest";

// npm test src/js-excercise/01-number.problem.js
it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
