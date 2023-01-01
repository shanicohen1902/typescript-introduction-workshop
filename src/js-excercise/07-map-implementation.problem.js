import { expect, it, assert } from "vitest";

function filter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}


it("should apply the callback function to each element of the array", function() {
  let numbers = [1, 2, 3, 4, 5];
  let even = filter(numbers, function(number) {
    return number % 2 === 0;
  });
  assert.deepEqual(even, [2, 4]);
});

it("should pass the index and array to the callback function", function() {
  let letters = ["a", "b", "c"];
  let vowels = filter(letters, function(letter, index, array) {
    return "aeiou".indexOf(letter) !== -1;
  });
  assert.deepEqual(vowels, ["a"]);
});

it("should return a new array", function() {
  let numbers = [1, 2, 3];
  let even = filter(numbers, function(number) {
    return number % 2 === 0;
  });
  assert.notEqual(even, numbers);
});

it("should not modify the original array", function() {
  let numbers = [1, 2, 3];
  filter(numbers, function(number) {
    return number % 2 === 0;
  });
  assert.deepEqual(numbers, [1, 2, 3]);
});