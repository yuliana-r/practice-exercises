//A reverseString function that takes a string and returns it reversed.

function reverseString(string) {
    return string.split('').reverse().join('');
}

module.exports = reverseString;