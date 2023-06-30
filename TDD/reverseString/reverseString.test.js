const reverseString = require("./reverseString");

test("reverses single word string", () => {
  expect(reverseString("kitty")).toEqual("yttik");
});

test("reverses multiple words", () => {
  expect(reverseString("cats are the best")).toEqual("tseb eht era stac");
});
