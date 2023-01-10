const palindromes = function (word) {

    const newWord = word.toLowerCase().replace(/[^a-z]/g, "");

    return newWord == newWord.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
