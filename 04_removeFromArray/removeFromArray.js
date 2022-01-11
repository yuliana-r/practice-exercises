const removeFromArray = function(...args) {
  // Store the first argument (which is an array) into the array variable
  const array = args[0] // e.g. for removeFromArray([1, 2, 3, 4], 3, 4) array = [1, 2, 3, 4]

  // Create a new array that includes  any values that are not arguments (so exclude 3 and 4)
  return array.filter(value => !args.includes(value))
  //  [1, 2, 3, 4].filter (
  // 1 => ![[1,2,3,4], 3, 4].includes(1) !FALSE => TRUE => Gets filtered onto the new list
	// 2 => ![[1,2,3,4], 3, 4].includes(2) !FALSE=> TRUE => Gets filtered onto the new list
	// 3 => ![[1,2,3,4], 3, 4].includes(3) !TRUE => FALSE => Not included in the filtered array
	// 4 => ![[1,2,3,4], 3, 4].includes(4) !TRUE => FALSE => Not included in the filtered array
}

// Do not edit below this line
module.exports = removeFromArray;
