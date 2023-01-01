import { expect, it } from "vitest";


const defaultUser = {};

const getUserId = (user) => {
  
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
