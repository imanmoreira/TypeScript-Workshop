import { buildName } from "./1"; // Add imports for your other two functions to write tests for them!

/**
 * Unit testing file! : https://jestjs.io/docs/expect
 * The .spec in the file name indicates that the file is a testing file
 *
 * You can run `npm test 1` in the command line to see how these tests run
 * THis will only run this file's tests, but to run all tests you can run `npm test`
 */

describe("Display Testing Options", () => {
  test("for primitive types", () => {
    expect(4).toBe(4);
    expect(true).toBe(true);
    expect("string").toBe("string");
    expect("string").not.toBe("strin");
  });
  test("for more complex types", () => {
    expect([4, 3]).toEqual([4, 3]); // arrays
    expect({ hello: "world" }).toEqual({ hello: "world" }); //objects
    expect({ hello: "world" }).not.toEqual({ hello: "world", number: 1 }); //not equal objects
    expect([4, 3]).not.toBe([4, 3]); // but why the fuck does this work??
  });
});

test("Test building names", () => {
  expect(buildName("Alex", "Takayama")).toBe("Alex Takayama");
  expect(buildName("Iman", "Moreira")).toBe("Iman Moreira");
});

test("Test longer string function", () => {
  /**
   * add tests here!
   */
});
test("Test sum function", () => {
  /**
   * add tests here!
   */
});
test("Test sum function 2", () => {
  /**
   * add tests here!
   */
});
