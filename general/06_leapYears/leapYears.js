const leapYears = function(year) {

    // return (year % 100 == 0 && year % 400 == 0 || year % 4 == 0 || year % 400 == 0);
    // if (year % 100 == 0) {
    //     if (year % 400 == 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // if (year % 4 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

//Leap years are years divisible by four (like 1984 and 2004) 4
//years divisible by 100 are not leap years (such as 1800 and 1900) 4 && 100
//unless they are divisible by 400 like 1600 and 2000 4 && 100 && 400
//
//if by 4 = true
//if by 100 but not 400 = false
//if by 400 = true
//

// Do not edit below this line
module.exports = leapYears;
