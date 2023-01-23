import { assert, it,describe } from "vitest";

function filter(array, callback) {

}

describe("filter", function () {

  it("should apply the callback function to each element of the array", function () {
    let numbers = [1, 2, 3, 4, 5];
    let even = filter(numbers, function (number) {
      return number % 2 === 0;
    });
    assert.deepEqual(even, [2, 4]);
  });

  it("should return a new array", function () {
    let numbers = [1, 2, 3];
    let even = filter(numbers, function (number) {
      return number % 2 === 0;
    });
    assert.notEqual(even, numbers);
  });

  it("should not modify the original array", function () {
    let numbers = [1, 2, 3];
    filter(numbers, function (number) {
      return number % 2 === 0;
    });
    assert.deepEqual(numbers, [1, 2, 3]);
  });
});