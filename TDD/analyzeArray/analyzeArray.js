/*
An analyzeArray function that takes an array of numbers and returns an object with the 
following properties: average, min, max, and length.

const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};

*/

function analyzeArray(arr) {

    const sum = arr.reduce((a, b) => a + b, 0);
    const length = arr.length;
    const average = Math.round((sum / length) * 100) / 100;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return { average, min, max, length };
}

module.exports = analyzeArray;




