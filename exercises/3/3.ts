/**
 * Truthines and Optional values
 */

import { Person } from "./3-types";

/**
 * Truthiness is a nice feature that JS/TS has -- It allows you to
 * more easily check if certain values exist or if a certain property is present
 * in an object or ensure that a value is not undefined
 *
 * All values are truthy except for: null, undefined, 0, "", false and NaN (not a number)
 */

/**
 * Optional parameters or optional fields in an object show up as 'undefined' when they're not being used.
 * You can indicate a value is optional by using a `?` after the name of the value
 */

/**
 * Note: the export keyword is added so it can be imported into another file for testing
 *
 * @param firstName - A persons first name
 * @param lastName - A persons last name, if it's provided
 * @returns a peron's full name
 */

function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    // since undefined is falsey, you can check if it's present by treating it as a boolean
    return `${firstName} ${lastName}`; // this is another way to concatinate strings -- it's cleaner if you're trying to add variables
  } else {
    return firstName;
  }
}

/* EXERCISES */

/**
 * One VERY dangerous thing about truthiness/optional values is remembering all values that are falsey
 *
 * What's wrong with this function? How can you fix it?
 * If you're struggling, write some tests/console log some values and see if you can figure it out
 */

export function increaseAge(person: Person): Person {
  if (person.age || person.age === 0) {
    return { name: person.name, age: person.age + 1 };
  } else {
    return person;
  }
}

/**
 * Create types for a player within a 1d game. The object should keep track of
 * where the player is (some sort of index on a 1d line), which direction they moved
 * in their previous move (use the predefined 'Direction' type), and whether or not they died.
 * Create an example of a player at their starting state and once they have died
 *
 * for a visual of the board locations -- Player1 (P1) is at 0 and P2 is at 4
 *
 * P1          P2
 * |---|---|---|---|
 * 0  1  2  3  4   5
 */

import { Player, Direction } from "./3-types"
let startingState: Player = {
  location: 0,
  alive: true
}
let deadPlayer: Player = {
  location: 4,
  prevDirection: "right",
  alive: false
}

/**
 * Create a function that takes a location (1d index) of an enemy and a player
 * and determines if they crossed paths with the enemy at the given location.
 */
export function crossedEnemy(enemy: number, player: Player): boolean {
  return (player.location >= enemy || 
    ("prevDirection" in player && player.prevDirection == "left" && player.location == enemy - 1));
}


/**
 * Create a movement function for your player that takes in a Player and optionally a Direction.
 * THe function should update the Player object to reflect their new location and their previous move
 * If no direction is provided, their character should somehow indicate that their previous move was no movement.
 */

export function move(player: Player, direction?: Direction): Player {
  if (direction) {
    return {
      location: direction === "left" ? player.location - 1 : player.location + 1,
      prevDirection: direction,
      alive: player.alive
    }
  } else {
    return {
      location: player.location,
      prevDirection: undefined,
      alive: player.alive
    }
  }
}
