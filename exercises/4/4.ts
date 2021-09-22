/**
 * Anonymous functions and abstractions!
 */

/**
 * Similar to lambdas in racket or anonymous functions in Java, you can also create anonymous functions
 * in typescript.
 * Unlike racket, this functions can be as many lines long as you want
 */

export const isNumberEven = (num: number) => num % 2 === 0; // side note, always use triple equals, not double equals
export const isNumberOdd = (num: number) => {
  const uselessConsts = 1;
  const val = "hello";
  return num % 2 === 1;
};

/** EXERCISES */

/**
 * Write another version of the function sum function from section 1 but use `.reduce(...)` instead.
 * It's similar to foldr -- Documentation can be found here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * It requires an anonymous function as one of the arguments.
 */

export function sumReduce(nums: number[]): number {
  return nums.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
}