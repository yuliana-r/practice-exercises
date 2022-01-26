const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function ([...args]) {
  return [...args].reduce((a, b) => a + b, 0);
};

const multiply = function([...args]) {
  return [...args].reduce((a, b) => a * b);
};

const power = function (a, b) {
  let total = 1;
  for (let i = 0; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  }

  let total = 1;

  for (let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
