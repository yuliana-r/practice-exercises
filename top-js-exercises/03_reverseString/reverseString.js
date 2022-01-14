const reverseString = function(str) {
    const myArray = str.split("");
    let newString = myArray.reverse().join("");
    return(newString);
};

// Do not edit below this line
module.exports = reverseString;
