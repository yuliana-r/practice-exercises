const capitalize = require("./capitalize");

test("capitalizes string of 1 word", () => {
  expect(capitalize("hello")).toEqual("Hello");
});

test("capitalizes string of multiple words", () => {
  expect(capitalize("cats are the best")).toEqual("Cats are the best");
});
