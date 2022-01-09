const repeatString = function(string, num) {
    if (num === 0) {
        return("");
    } else if (num < 0) {
        return("ERROR");
    } else {
      let repeatString = "";
      while (num > 0) {
        repeatString += string;
        num--;
      }
      return(repeatString);
    }
};

// Do not edit below this line
module.exports = repeatString;
