const caesar = require("./caesarCipher");

test("works with single upper case letters", () => {
  expect(caesar("A", 5)).toBe("F");
});

test("works with single lower case letters", () => {
  expect(caesar("b", 5)).toBe("g");
});

test("works with strings", () => {
  expect(caesar("AaA", 3)).toBe("DdD");
});

test("works with wraps", () => {
  expect(caesar("Z", 1)).toBe("A");
});

test("works with sentences", () => {
  expect(caesar("Hello, Cats!", 5)).toBe("Mjqqt, Hfyx!");
});

test("works with negative shift", () => {
  expect(caesar("Mjqqt, Hfyx!", -5)).toBe("Hello, Cats!");
});

test("works with large shift factors", () => {
  expect(caesar("Hello, World!", 75)).toBe("Ebiil, Tloia!");
});

test("works with large negative shift factors", () => {
  expect(caesar("Hello, World!", -29)).toBe("Ebiil, Tloia!");
});
