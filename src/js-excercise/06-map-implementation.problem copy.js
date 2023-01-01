import { expect, it, assert } from "vitest";


function map(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

it("should apply the callback function to each element of the array", function () {
  let numbers = [1, 2, 3, 4, 5];
  let doubled = map(numbers, function (number) {
    return number * 2;
  });
  assert.deepEqual(doubled, [2, 4, 6, 8, 10]);
});

it("should pass the index and array to the callback function", function () {
  let letters = ["a", "b", "c"];
  let indices = map(letters, function (letter, index, array) {
    return index;
  });
  assert.deepEqual(indices, [0, 1, 2]);
});

it("should return a new array", function () {
  let numbers = [1, 2, 3];
  let squared = map(numbers, function (number) {
    return number * number;
  });
  assert.notEqual(squared, numbers);
});

it("should not modify the original array", function () {
  let numbers = [1, 2, 3];
  map(numbers, function (number) {
    return number * 2;
  });
  assert.deepEqual(numbers, [1, 2, 3]);
});