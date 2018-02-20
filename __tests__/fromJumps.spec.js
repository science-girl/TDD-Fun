const frogJumps = require("../lib/frogJumps.js");

describe("Frogs a Jumpin'", () => {
  test("when start is equal to end, should return 0", () => {
    const result = frogJumps(10, 10, 5);
    expect(result).toEqual(0);
  });
});

describe("Frogs a Jumpin'", () => {
  test("when start is less than 0", () => {
    const result = frogJumps(-1, 10, 5);
    expect(result).toEqual(0);
  });
});

describe("Frogs a Jumpin'", () => {
  test("when end is less than 0", () => {
    const result = frogJumps(10, -1, 5);
    expect(result).toEqual(0);
  });
});

describe("Frogs a Jumpin'", () => {
  test("when start is equal to end", () => {
    const result = frogJumps(10, 10, 5);
    expect(result).toEqual(0);
  });
});

describe("Frogs a Jumpin'", () => {
  test("when jumpLength is 0", () => {
    const result = frogJumps(10, 5, 0);
    expect(result).toEqual(0);
  });
});

describe("Frogs a Jumpin'", () => {
  test("when start, end, jumpLength are 0", () => {
    const result = frogJumps(0, 0, 0);
    expect(result).toEqual(0);
  });
});

describe("Frogs a Jumpin'", () => {
  test("when end is less than start", () => {
    const result = frogJumps(10, 5, 5);
    expect(result).toEqual(0);
  });
});

describe("Frogs a Jumpin'", () => {
  test("when start is a double", () => {
    const result = frogJumps(10.11, 15, 5);
    expect(result).toEqual(1);
  });
});

describe("Frogs a Jumpin'", () => {
  test("when end is a double", () => {
    const result = frogJumps(10, 15.11, 5);
    expect(result).toEqual(1);
  });
});

describe("Frogs a Jumpin'", () => {
  test("when jumpLength is a double", () => {
    const result = frogJumps(10, 15, 5.2);
    expect(result).toEqual(1);
  });
});

describe("Frogs a Jumpin'", () => {
  test("when no arguments are given", () => {
    const result = frogJumps();
    expect(result).toEqual("expected a start, end, and jumpLength");
  });
});

describe("Frogs a Jumpin'", () => {
  test("when arguments are not valid Integers", () => {
    const result = frogJumps();
    expect(result).toEqual("expected a start, end, and jumpLength");
  });
});

describe("Frogs a Jumpin'", () => {
  test("when end is greater than start", () => {
    const result = frogJumps(10, 20, 5);
    expect(result).toEqual(2);
  });
});
