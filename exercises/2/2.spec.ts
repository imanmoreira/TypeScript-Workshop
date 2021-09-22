/**
 * Writing tests for functions that throw errors :
 */
function errorTest() {
  throw new Error("beep");
}
test("writing tests that throw errors", () => {
  expect(() => errorTest()).toThrowError(`beep`);
});

import { Person } from "./2-types";
import { sumNumObject, isAdmin, isPerson, isUser, canDelete, deleteUser } from "./2"; 

/**
 * Write tests for all your functions :) !
 */

test("JSON summing", () => {
  expect(sumNumObject(false)).toBe(0);
  expect(sumNumObject(true)).toBe(0);
  expect(sumNumObject("9")).toBe(0);
  expect(sumNumObject("hello")).toBe(0);
  expect(sumNumObject(10)).toBe(10);
  expect(sumNumObject(45)).toBe(45);
  expect(sumNumObject([0, 3, true, "flop", [24, 6], {num: -5, json: [false]}])).toBe(28);
  expect(sumNumObject({num: 12, json: "hello"})).toBe(12);
});

test("Predicates", () => {
  let dillon: object = {type: "admin", name: "Dillon", 
  username: "dillydally", age: 18, 
  password: "12345", canDelete: true};
  let user54: object = {type: "user", name: "Jane Doe", 
  username: "user54", age: 13, 
  password: "secure_password", premium: false};
  expect(isAdmin(dillon)).toBe(true);
  expect(isUser(dillon)).toBe(false);
  expect(isPerson(dillon)).toBe(true);
  expect(isAdmin(user54)).toBe(false);
  expect(isUser(user54)).toBe(true);
  expect(isPerson(user54)).toBe(true);
  expect(isAdmin(0)).toBe(false);
  expect(isAdmin(false)).toBe(false);
  expect(isAdmin([1, 3])).toBe(false);
  expect(isAdmin({x: 15, y: 15})).toBe(false);
  expect(isUser(0)).toBe(false);
  expect(isUser(false)).toBe(false);
  expect(isUser([1, 3])).toBe(false);
  expect(isUser({x: 15, y: 15})).toBe(false);
  expect(isPerson(0)).toBe(false);
  expect(isPerson(false)).toBe(false);
  expect(isPerson([1, 3])).toBe(false);
  expect(isPerson({x: 15, y: 15})).toBe(false);
});

test("User deletion", () => {
  let dillon: Person = {type: "admin", name: "Dillon", 
  username: "dillydally", age: 18, 
  password: "12345", canDelete: true};
  let user54: Person = {type: "user", name: "Jane Doe", 
  username: "user54", age: 13, 
  password: "secure_password", premium: false};
  let otherAdmin: Person = {type: "admin", name: "Loser", 
  username: "i can't delete people lmao", age: 2, 
  password: "pass", canDelete: false};
  expect(canDelete(dillon)).toBe(true);
  expect(canDelete(user54)).toBe(false);
  expect(canDelete(otherAdmin)).toBe(false);
  expect(() => deleteUser([], "d", "n")).toThrowError(`One or both of the usernames are not present in the list of users.`);
  expect(() => deleteUser([dillon, user54, otherAdmin], "dillydally", "dillydally")).toThrowError(`Cannot delete self from platform`);
  expect(() => deleteUser([dillon, user54, otherAdmin], "dillydally", "user54")).toThrowError(`User attempting to delete anothe user does not have deletion permissions.`);
  expect(() => deleteUser([dillon, user54, otherAdmin], "user54", "i can't delete people lmao")).toThrowError(`User attempting to delete anothe user does not have deletion permissions.`);
  expect(() => deleteUser([dillon, user54, otherAdmin], "i can't delete people lmao", "dillydally")).toThrowError(`Cannot delete an admin.`);
  expect(deleteUser([dillon, user54, otherAdmin], "user54", "dillydally")).toEqual([dillon, otherAdmin]);
});