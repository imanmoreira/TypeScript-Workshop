/**
 * An example of a type definition!
 */
export type Fish = {
  type: "fish"; // having a type field for union types is a good practice for making it easy to distinguish types
  name: string;
  color: string;
  canSwim: boolean;
};

/**
 * squack
 */
export type Bird = {
  type: "bird";
  name: string;
  color: string;
  canSwim: boolean;
};

/**
 * the only animals that exist
 * An Example of a Union Type
 */
export type Animal = Fish | Bird; // these two can be distinguished from each other using the type field alone

/**
 * My favorite animals
 */
export type SortOfAnimals = Animal | "bread"; // but this one can't, since the string "bread" won't have that field

type AnimalVelocity = {
  speed: number;
  direction: "left" | "right";
};

/**
 * An example of an intersection type -- has the properties of both fish and animalvelocity
 */
type FishZOOM = AnimalVelocity & Fish;

type BirdZOOM = AnimalVelocity & Bird;
