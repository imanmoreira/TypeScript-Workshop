/**
 * Example Types
 */

export interface Person {
  name: string;
  age: number;
}

/**
 * Exercises Types
 */
export type Direction = "right" | "left";

export type Player = {
  location: number,
  prevDirection?: Direction,
  alive: boolean
}