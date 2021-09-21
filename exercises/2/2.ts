/**
 * Defining complex types
 */

// ***** EXAMPLES *****

/**
 * In standard practice, it's best to define types in separate file, so the types I'm using can be found in the
 * 2-types.ts file
 */

import { Animal, SortOfAnimals, Bird, Fish } from "./2-example-types";

/**
 * You can predefine different types to be used across your code. For each of those types, you can also
 * create predicates to specifically know how to tell when something is your defined type.
 *
 * Depending on what you're differentiating between + how clean your type definitions are, the different predicates
 * could look pretty different: Here are three different potenaitl predicates for fish
 */

// The "is Fish" here tells TypeScript that when this function is used, it knows it's a Fish
// If you marked the return type as boolean and use the predicate, TypeScript will assume it could still be any of the types
function isFish(animal: Animal): animal is Fish {
  return animal.type === "fish";
}
function isFish2(sortOfAnimals: SortOfAnimals): sortOfAnimals is Fish {
  return sortOfAnimals !== "bread" && sortOfAnimals.type === "fish";
}
function isFish3(value: any): value is Fish {
  const isObject = (val: any) =>
    val !== null && typeof val === "object" && !Array.isArray(val); // Determines if something is a non-null json object
  return (
    isObject(value) &&
    value.type === "fish" &&
    typeof value.name === "string" &&
    typeof value.color === "string" &&
    typeof value.canSwim === "boolean"
  );
}

function animalSound(animal: Animal) {
  return isFish2(animal) ? "blub" : "squack"; // This is a terenary, basically an inline if statement
}

// ***** EXERCISES *****

/**
 * A NumJSON is one of
 * - A number
 * - A string
 * - A boolean
 * - A NumJSON[]
 * - A NumObject
 */

/**
 * A NumObject is { num: number, json: NumJSON }
 */

/**
 * Write a function that takes the above data type and returns a sum of all the numbers.
 * It should ignore any numbers.
 * Make sure to write a type definition in the types file and import them!
 */

/**
 * You have two types of people for your website -- Admins and general users
 * Create type definitions (in the types file) that include name, "unique" usernames, age and passwords for both.
 * Users should also have a boolean flag for whether or not they're premium users, and admins
 * should have a boolean flag for whether or not they have permission to delete users.
 * Also create a type definition for a Person, which includes both Users and Admins
 * Feel free to add any additional fields you think are necessary
 */

/**
 * Create a type predicate that takes any type and deteremines if it's an Admin. Do the same for Users and Persons
 */

/**
 * Create a function that takes in a Person and determines if they have the ability to delete users.
 */

/**
 * Create a function that takes in the "full" list of users on the platform and two usernames.
 * The function should remove the user with the first given username from the list only if the second user has the
 * ability to delete users. It should return the full list of users with the user deleted
 *
 * If either usernames aren't found in the list, the function should throw an error
 * If the user tries to delete an admin, the function should throw an error
 * Any other error cases you can think of?
 * Note: you can use `throw new Error("[error message]");`
 */
