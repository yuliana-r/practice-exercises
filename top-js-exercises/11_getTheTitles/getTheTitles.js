const findTheOldest = function (array) {
    array.map(item => item.Age = item.yearOfDeath - item.yearOfBirth);

    let oldest = array.reduce((max, person) => max.Age > person.Age ? max : person);
    return oldest.name;
  };

// Do not edit below this line
module.exports = getTheTitles;