/**
 * Testssss!
 */

import { Person, Player, Direction } from "./3-types";
import { increaseAge, move, crossedEnemy } from "./3";

test("Increase age", () => {
    let baby: Person = {name: "ugly", age: 0};
    let child: Person = {name: "oliver twist", age: 10};
    let adult: Person = {name: "jen", age: 27};
    expect(increaseAge(baby)).toEqual({name: "ugly", age: 1});
    expect(increaseAge(child)).toEqual({name: "oliver twist", age: 11});
    expect(increaseAge(adult)).toEqual({name: "jen", age: 28});
});

test("Players", () => {
    let p1: Player = {
        location: 0,
        alive: true
    }
    let p2: Player = {
        location: 4,
        prevDirection: "left",
        alive: true
    }
    expect(crossedEnemy(0, p1)).toBe(true);
    expect(crossedEnemy(1, p1)).toBe(false);
    expect(crossedEnemy(3, p2)).toBe(true);
    expect(crossedEnemy(4, p2)).toBe(true);
    expect(crossedEnemy(5, p2)).toBe(true);
    expect(crossedEnemy(6, p2)).toBe(false);
    expect(move(p1)).toEqual(p1);
    expect(move(p1, "left")).toEqual({location: -1, prevDirection: "left", alive: true});
    expect(move(p1, "right")).toEqual({location: 1, prevDirection: "right", alive: true});
    expect(move(p2)).toEqual({location: 4, prevDirection: undefined, alive: true});
    expect(move(p2, "left")).toEqual({location: 3, prevDirection: "left", alive: true});
    expect(move(p2, "right")).toEqual({location: 5, prevDirection: "right", alive: true});
});