const minPositiveInt = require("../lib/minPositiveInt.js");

describe("The minimum positive integer", () => {
  test("when no arguments are given", () => {
    const result = minPositiveInt();
    expect(result).toEqual(undefined);
  });
});

describe("The minimum positive integer", () => {
  test("when an empty array is given", () => {
    const result = minPositiveInt();
    expect(result).toEqual(undefined);
  });
});

describe("The minimum positive integer", () => {
  test("when all elements are the same", () => {
    const result = minPositiveInt([1, 1, 1, 1]);
    expect(result).toEqual(2);
  });
});

describe("The minimum positive integer", () => {
  test("when duplicates exist", () => {
    const result = minPositiveInt([1, 3, 6, 4, 1, 2]);
    expect(result).toEqual(5);
  });
});

describe("The minimum positive integer", () => {
  test("when the numbers do not begin at 1", () => {
    const result = minPositiveInt([99, 103, 104, 109, 110]);
    expect(result).toEqual(100);
  });
});

describe("The minimum positive integer", () => {
  test("when no min exists within the given array", () => {
    const result = minPositiveInt([99, 100, 101]);
    expect(result).toEqual(102);
  });
});

describe("The minimum positive integer", () => {
  test("when the given array is unsorted", () => {
    const result = minPositiveInt([100, 1, 99]);
    expect(result).toEqual(2);
  });
});

describe("The minimum positive integer", () => {
  test("when the given array has 1 element", () => {
    const result = minPositiveInt([100]);
    expect(result).toEqual(101);
  });
});

describe("The minimum positive integer", () => {
  test("when the given array negative elements", () => {
    const result = minPositiveInt([-1, -50, -4]);
    expect(result).toEqual(1);
  });
});
