const oneAway = require("../lib/oneAway.js");

describe("One or Zero Edits Away", () => {
  test("when no arguments are given", () => {
    const result = oneAway();
    expect(result).toEqual(undefined);
  });
});

describe("One or Zero Edits Away", () => {
  test("when no edit is required", () => {
    const result = oneAway("pale", "pale");
    expect(result).toEqual(false);
  });
});

describe("One or Zero Edits Away", () => {
  test("when stringOne is less than stringTwo with one edit", () => {
    const result = oneAway("pal", "pale");
    expect(result).toEqual(true);
  });
});

describe("One or Zero Edits Away", () => {
  test("when stringTwo is less than stringOne with one edit", () => {
    const result = oneAway("pale", "pal");
    expect(result).toEqual(true);
  });
});

describe("One or Zero Edits Away", () => {
  test("when stringTwo is less than stringOne with one edit", () => {
    const result = oneAway("pales", "pale");
    expect(result).toEqual(true);
  });
});

describe("One or Zero Edits Away", () => {
  test("when stringOne is the same size as stringTwo with one edit", () => {
    const result = oneAway("pale", "bale");
    expect(result).toEqual(true);
  });
});

describe("One or Zero Edits Away", () => {
  test("when stringOne is the same size as stringTwo with one edit", () => {
    const result = oneAway("pale", "bake");
    expect(result).toEqual(false);
  });
});
