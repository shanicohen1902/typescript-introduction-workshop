import { expect, it } from "vitest";


const defaultUser = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  isAdmin: true,
};

const getUserId = (user) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
