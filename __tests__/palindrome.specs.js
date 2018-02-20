const palindrome = require("../lib/palindrome.js");

describe("Is a palindrome", () => {
  test("when no arguments are given", () => {
    const result = palindrome();
    expect(result).toEqual(false);
  });
});

describe("Is a palindrome", () => {
  test("when punctuation exists in a valid palindrome", () => {
    const result = palindrome("race,car");
    expect(result).toEqual(true);
  });
});

describe("Is a palindrome", () => {
  test("when varied casing exists in a valid palindrome", () => {
    const result = palindrome("RacEcar");
    expect(result).toEqual(true);
  });
});

describe("Is a palindrome", () => {
  test("when spaces exist", () => {
    const result = palindrome("Madam I'm Adam");
    expect(result).toEqual(true);
  });
});

describe("Is a palindrome", () => {
  test("when not a palindrome", () => {
    const result = palindrome("Madam I am Adam");
    expect(result).toEqual(false);
  });
});

describe("Is a palindrome", () => {
  test("when is an empty string", () => {
    const result = palindrome(" ");
    expect(result).toEqual(false);
  });
});

describe("Is a palindrome", () => {
  test("when is a string with one character", () => {
    const result = palindrome("b");
    expect(result).toEqual(false);
  });
});

describe("Is a palindrome", () => {
  test("when is a string with two characters", () => {
    const result = palindrome("be");
    expect(result).toEqual(false);
  });
});

describe("Is a palindrome", () => {
  test("when a string is not passed", () => {
    const result = palindrome(1001);
    expect(result).toEqual(false);
  });
});

describe("Is a palindrome", () => {
  test("when a numeric string is passed", () => {
    const result = palindrome("1001");
    expect(result).toEqual(true);
  });
});
