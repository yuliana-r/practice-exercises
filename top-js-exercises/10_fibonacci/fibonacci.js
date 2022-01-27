const fibonacci = function (n) {

    if (n <= 0) return "OOPS";

    if (n == 1 || n == 2) {
      return 1;
    }

    return fibonacci(n - 2) + fibonacci(n - 1);
  };

// Do not edit below this line
module.exports = fibonacci;
