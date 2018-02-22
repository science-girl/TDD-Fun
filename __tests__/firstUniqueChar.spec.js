const firstUniqueChar = require("../lib/firstUniqueChar.js");

describe("find first unique characer", () => {
  test("when no arguments are given", () => {
    const result = firstUniqueChar();
    expect(result).toEqual("requires a string");
  });
});

describe("find first unique characer", () => {
  test("when first unique character is first element", () => {
    const result = firstUniqueChar("terfg");
    expect(result).toEqual("t");
  });
});

describe("find first unique characer", () => {
  test("when there is no unique character", () => {
    const result = firstUniqueChar("tttt");
    expect(result).toEqual(undefined);
  });
});

describe("find first unique characer", () => {
  test("when all characters are unique", () => {
    const result = firstUniqueChar("frof");
    expect(result).toEqual("r");
  });
});

describe("find first unique characer", () => {
  test("when the unique character is at the end", () => {
    const result = firstUniqueChar("ffrroofz");
    expect(result).toEqual("z");
  });
});
