const palindromes = function (a) {
  processedString = a.toLowerCase().replace(/[.,\/#!" "$%\^&\*;:{}=\-_`~()]/g, "");
  return (
    processedString
    .split('')
    .reverse()
    .join('') == processedString
  );
}

// Do not edit below this line
module.exports = palindromes;