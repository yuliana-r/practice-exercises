const palindromes = function (a) {
    let splitString = a.toLowerCase().split('');
    let initialString = splitString.join('').replace(/[.,\/#!" "$%\^&\*;:{}=\-_`~()]/g, "");
    splitString = initialString.split('');
    let reverseString = splitString.reverse();
    let joinString = reverseString.join('');

    return ((initialString === joinString) ? true : false);
  }

// Do not edit below this line
module.exports = palindromes;
