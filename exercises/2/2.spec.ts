/**
 * Writing tests for functions that throw errors :
 */
function errorTest() {
  throw new Error("beep");
}
test("writing tests that throw errors", () => {
  expect(() => errorTest()).toThrowError(`beep`);
});

/**
 * Write tests for all your functions :) !
 */
