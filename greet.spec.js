import { greet } from "./greet.js";

describe("greet", () => {
  it("returns 'Hello Coach!'", () => {
     expect(greet("CJ")).toBe("Hello Coach!");
  });

  it("returns 'Hello Coach!'", () => {
    expect(greet("Lara")).toBe("Hello Coach!");
  });

  it("returns 'Hello Coach!'", () => {
    expect(greet("Jan")).toBe("Hello Coach!");
  });

  it("returns 'Hello Coach!'", () => {
    expect(greet("Axel")).toBe("Hello Axel!");
  });

  it("returns 'Hello stranger!'", () => {
    expect(greet("")).toBe("Hello stranger!");
  });
 });