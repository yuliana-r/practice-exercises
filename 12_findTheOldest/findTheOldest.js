const findTheOldest = function(people) {
    
    const getAge = function(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        }

        return death - birth;
    }
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge > currentAge ? oldest : currentPerson;
    })

};

// Do not edit below this line
module.exports = findTheOldest;
