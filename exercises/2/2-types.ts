/**
 * A NumJSON is one of
 * - A number
 * - A string
 * - A boolean
 * - A NumJSON[]
 * - A NumObject
 */

export type NumJSON = number | string | boolean | NumJSON[] | NumObject;

/**
 * A NumObject is { num: number, json: NumJSON }
 */

export type NumObject = {
    num: number,
    json: NumJSON
};

/**
 * You have two types of people for your website -- Admins and general users
 * Create type definitions (in the types file) that include name, "unique" usernames, age and passwords for both.
 * Users should also have a boolean flag for whether or not they're premium users, and admins
 * should have a boolean flag for whether or not they have permission to delete users.
 * Also create a type definition for a Person, which includes both Users and Admins
 * Feel free to add any additional fields you think are necessary
 */

export type Admin = {
    type: "admin",
    name: string,
    username: string,
    age: number,
    password: string,
    canDelete: boolean
}

export type User = {
    type: "user",
    name: string,
    username: string,
    age: number,
    password: string,
    premium: boolean
}

export type Person = Admin | User;