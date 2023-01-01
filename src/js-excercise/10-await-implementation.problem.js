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

async function getFirstUserName(url) {
  let res = await fetch(url);
  if (!res.ok) {
    const message = `An error has occured`;
    throw new Error(message);
  }
  const json = await res.json();
  return json[0].name;
}

describe("get first name", function () {
  it("should get the first name", async function () {
    const data = await getFirstUserName(url)
      assert.equal(data, "Leanne Graham");
  });

  it("should reject with an error when the request fails", async function () {
    let data;
    try{
      data = await getFirstUserName('https://jsonplaceholder.typicode.com/user')
    } catch(error){
      assert.equal(error.message, `An error has occured`)
    }
  });
});