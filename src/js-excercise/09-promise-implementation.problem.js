import { expect, it, assert, describe } from "vitest";
import fetch from 'node-fetch';
const url = 'https://jsonplaceholder.typicode.com/users'

/*
First user in the array:
{
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}

Name of the first person in the array:
Leanne Graham
*/

function getFirstUserName(url) {
  let res = fetch(url)
}

describe("get first user name from users API", function () {

  it("should get the first name", function () {
    getFirstUserName(url)
      .then(function (data) {
        assert.equal(data, "Leanne Graham");
      })
  });

  it("should reject with an error when the request fails", function () {
    getFirstUserName("invalid url")
    .then(function() {
      return new Error("Expected the Promise to reject");
    })
    .catch(function(error) {
      assert.instanceOf(error, Error);
    });
  });
});