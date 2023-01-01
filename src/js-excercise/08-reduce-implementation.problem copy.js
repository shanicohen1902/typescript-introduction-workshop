import { expect, it, assert, describe } from "vitest";

function reduce(array, callback, initialValue) {

}

describe("reduce", function() {
  it("should apply the callback function to each element of the array", function() {
    let numbers = [1, 2, 3, 4, 5];
    let sum = reduce(numbers, function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    assert.equal(sum, 15);
  });

  it("should use the initial value as the accumulator if provided", function() {
    let numbers = [1, 2, 3];
    let sum = reduce(numbers, function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 10);
    assert.equal(sum, 16);
  });
});