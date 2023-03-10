import { expect, it, vi, beforeEach, describe } from "vitest";

class Publisher {

}

class Subscriber {

}

const publisher = new Publisher();
const subscriber1 = new Subscriber("Subscriber 1");
const subscriber2 = new Subscriber("Subscriber 2");

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);

publisher.publish("Hello World!");
// Output: "Subscriber 1 received: Hello World!"
// Output: "Subscriber 2 received: Hello World!"


describe("publisher-subscriber implementation", () => {
  let publisher;
  let subscriber;

  beforeEach(() => {
    publisher = new Publisher();
    subscriber = {
      notify: vi.fn()
    };
  });

  it("subscribing a subscriber", () => {
    publisher.subscribe(subscriber);
    expect(publisher.subscribers).toContain(subscriber);
  });

  it("unsubscribing a subscriber", () => {
    publisher.subscribe(subscriber);
    publisher.unsubscribe(subscriber);
    expect(publisher.subscribers).not.toContain(subscriber);
  });

  it("publishing to subscribers", () => {
    publisher.subscribe(subscriber);
    publisher.publish("Hello World!");
    expect(subscriber.notify).toHaveBeenCalledWith("Hello World!");
  });
});
