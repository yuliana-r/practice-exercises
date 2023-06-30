/*
A caesarCipher function that takes a string and a shift factor and returns it with each 
character “shifted”.

Don’t forget to test wrapping from z to a.
Don’t forget to test keeping the same case.
Don’t forget to test punctuation!
For this one, you may want to split the final function into a few smaller functions. 
One concept of Testing is that you don’t need to explicitly test every function you write… 
Just the public ones. So in this case you only need tests for the final caesarCipher function. 
If it works as expected you can rest assured that your smaller helper functions are doing what 
they’re supposed to.
*/

function caesarCipher(string, shiftFactor) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetLength = alphabet.length;
  const shift = shiftFactor % alphabetLength;
  const result = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (/[a-zA-Z]/.test(char)) {
      const isUpperCase = char === char.toUpperCase();
      const charIndex = alphabet.indexOf(char.toLowerCase());
      const shiftedIndex = (charIndex + shift + alphabetLength) % alphabetLength;
      const shiftedChar = isUpperCase
        ? alphabet[shiftedIndex].toUpperCase()
        : alphabet[shiftedIndex];

      result.push(shiftedChar);
    } else {
      result.push(char);
    }
  }

  return result.join("");
}

module.exports = caesarCipher;
