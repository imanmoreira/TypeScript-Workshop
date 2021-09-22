"use strict";
//  *Writing Functions and Writing Tests*
exports.__esModule = true;
exports.sumArray = exports.longerString = exports.buildName = void 0;
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
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
exports.buildName = buildName;
// ***** EXERCISES *****
/**
 * Write a function that takes two strings and returns whichever string is longer.
 * Return the first string if they're the same length
 * Note: Make sure to export your functions so you can write tests for them :)
 * You can use  `console.log(...);` in the short term to test that your code runs
 */
//
function longerString(s1, s2) {
    if (s1.length >= s2.length) {
        return s1;
    }
    else {
        return s2;
    }
}
exports.longerString = longerString;
/**
 * Write a function that uses a forloop to loop over an array of numbers and finds the sum.
 */
//
function sumArray(nums) {
    var sum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        sum += num;
    }
    return sum;
}
exports.sumArray = sumArray;
