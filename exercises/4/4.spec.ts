import { sumReduce, isNumberEven, isNumberOdd } from "./4";

test("Anonymous functions", () => {
    expect(sumReduce([1, 2, 3, 4])).toBe(10);
    expect(sumReduce([1, 2, -3, 4, -5, 6, -7, 8, -7])).toBe(-1);
    expect(sumReduce([])).toBe(0);
    expect(isNumberOdd(0)).toBe(false);
    expect(isNumberEven(0)).toBe(true);
    expect(isNumberOdd(1)).toBe(true);
    expect(isNumberEven(1)).toBe(false);
    expect(isNumberOdd(2)).toBe(false);
    expect(isNumberEven(2)).toBe(true);
});