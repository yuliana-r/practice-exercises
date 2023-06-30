const calculator = require("./calculator");

test("adds 2 numbers", () => {
  expect(calculator.add(5, 7)).toEqual(12);
});

test("subtracts 2 numbers", () => {
  expect(calculator.subtract(10, 4)).toEqual(6);
});

test("multiplies 2 numbers", () => {
  expect(calculator.multiply(3, 5)).toEqual(15);
});

test("divides 2 numbers", () => {
  expect(calculator.divide(27, 3)).toEqual(9);
});

test("does not divide by 0", () => {
  expect(calculator.divide(4, 0)).toEqual("Cannot divide by 0");
});
