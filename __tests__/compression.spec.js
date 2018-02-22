const compression = require("../lib/compression.js");

describe("String Compression", () => {
  test("when no arguments are given", () => {
    const result = compression();
    expect(result).toEqual(undefined);
  });
});

describe("String Compression", () => {
  test("when a non-string is given", () => {
    const result = compression();
    expect(result).toEqual(undefined);
  });
});

describe("String Compression", () => {
  test("when string is composed of unique characters", () => {
    const result = compression("abcd");
    expect(result).toEqual("a1b1c1d1");
  });
});

describe("String Compression", () => {
  test("when string is composed of unique characters", () => {
    const result = compression("frof");
    expect(result).toEqual("f1r1o1f1");
  });
});

describe("String Compression", () => {
  test("when string is composed of all the same character", () => {
    const result = compression("aaaaa");
    expect(result).toEqual("a5");
  });
});

describe("String Compression", () => {
  test("when string is composed of numbers and characters", () => {
    const result = compression("aaaaa11111bbb");
    expect(result).toEqual("a515b3");
  });
});

describe("String Compression", () => {
  test("when string has special characters", () => {
    const result = compression("aaaaa***");
    expect(result).toEqual("a5*3");
  });
});

describe("String Compression", () => {
  test("when string has spaces", () => {
    const result = compression("     ");
    expect(result).toEqual(" 5");
  });
});
