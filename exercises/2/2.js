"use strict";
/**
 * Defining complex types
 */
exports.__esModule = true;
exports.canDelete = exports.isPerson = exports.isUser = exports.isAdmin = exports.sumNumObject = void 0;
/**
 * You can predefine different types to be used across your code. For each of those types, you can also
 * create predicates to specifically know how to tell when something is your defined type.
 *
 * Depending on what you're differentiating between + how clean your type definitions are, the different predicates
 * could look pretty different: Here are three different potenaitl predicates for fish
 */
// The "is Fish" here tells TypeScript that when this function is used, it knows it's a Fish
// If you marked the return type as boolean and use the predicate, TypeScript will assume it could still be any of the types
function isFish(animal) {
    return animal.type === "fish";
}
function isFish2(sortOfAnimals) {
    return sortOfAnimals !== "bread" && sortOfAnimals.type === "fish";
}
function isFish3(value) {
    var isObject = function (val) {
        return val !== null && typeof val === "object" && !Array.isArray(val);
    }; // Determines if something is a non-null json object
    return (isObject(value) &&
        value.type === "fish" &&
        typeof value.name === "string" &&
        typeof value.color === "string" &&
        typeof value.canSwim === "boolean");
}
/**
 * Determines the sound of the given animal
 * @param animal the animal who's sound is being returned
 * @returns the sound the animal makes
 */
function animalSound(animal) {
    return isFish2(animal) ? "blub" : "squack"; // This is a terenary, basically an inline if statement
}
/**
 * Write a function that takes the above data type and returns a sum of all the numbers.
 * It should ignore any non-numbers.
 * Make sure to write a type definition in the types file and import them!
 */
function sumNumObject(obj) {
    if (typeof obj == "string" || typeof obj == "boolean") {
        return 0;
    }
    if (typeof obj == "number") {
        return obj;
    }
    if ("json" in obj) {
        return obj.num + sumNumObject(obj.json);
    }
    else {
        var sum = 0;
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var json = obj_1[_i];
            sum += sumNumObject(json);
        }
        return sum;
    }
}
exports.sumNumObject = sumNumObject;
/**
 * Create a type predicate that takes any type and deteremines if it's an Admin. Do the same for Users and Persons
 */
function isAdmin(value) {
    return (value != null
        && typeof value === "object"
        && !Array.isArray(value)
        && value.type === "admin"
        && typeof value.name === "string"
        && typeof value.username === "string"
        && typeof value.age === "number"
        && typeof value.password === "string"
        && typeof value.canDelete === "boolean");
}
exports.isAdmin = isAdmin;
function isUser(value) {
    return (value != null
        && typeof value === "object"
        && !Array.isArray(value)
        && value.type === "user"
        && typeof value.name === "string"
        && typeof value.username === "string"
        && typeof value.age === "number"
        && typeof value.password === "string"
        && typeof value.premium === "boolean");
}
exports.isUser = isUser;
function isPerson(value) {
    return (isAdmin(value) || isUser(value));
}
exports.isPerson = isPerson;
/**
 * Create a function that takes in a Person and determines if they have the ability to delete users.
 */
function canDelete(p) {
    return isAdmin(p) && p.canDelete;
}
exports.canDelete = canDelete;
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
