//  *Writing Functions and Writing Tests*

// ***** EXAMPLES *****

/**
 * TypeScript functions include type annotations for their inputs and optional annotation for the outputs
 * Some of the base type options are -- number, string, boolean, and void
 * You can add a set of square brackets to indicate an array of that specific type (ex. `number[]`)
 */

/**
 * **An Example of how a function is written in TypeScript**
 * Note: the export keyword is added so it can be imported into another file for testing
 *
 * @param firstName - A persons first name
 * @param lastName - A persons last name
 * @returns a peron's full name
 */

export function buildName(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}

// ***** EXERCISES *****

/**
 * Write a function that takes two strings and returns whichever string is longer.
 * Return the first string if they're the same length
 * Note: Make sure to export your functions so you can write tests for them :)
 * You can use  `console.log(...);` in the short term to test that your code runs
 */

//

/**
 * Write a function that uses a forloop to loop over an array of numbers and finds the sum.
 */

//

/**
 * Write a function
 */

//
