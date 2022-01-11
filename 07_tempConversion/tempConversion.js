const ftoc = function(tF) {
  let tC = (tF - 32) * (5/9);
  if (tC % 1 === 0) {
    return tC;
  } else {
    return +tC.toFixed(1);
  }
};

const ctof = function(tC) {
  let tF = tC * (9/5) + 32;
  if (tF % 1 === 0) {
    return tF;
  } else {
    return +tF.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
