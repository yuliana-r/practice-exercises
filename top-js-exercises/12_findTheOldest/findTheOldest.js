const findTheOldest = function (array) {

    const currentYear = new Date().getFullYear();

    array.map(item => {
        if (item.yearOfDeath !== undefined) {
            item.Age = item.yearOfDeath - item.yearOfBirth;
        } else {
            item.Age = currentYear - item.yearOfBirth;
        }
    })

    const oldest = array.sort(function (a, b) {
        const lastPerson = a.Age;
        const nextPerson = b.Age;

        return (lastPerson > nextPerson) ? -1 : 1;

    })

    return oldest[0];
}
// Do not edit below this line
module.exports = findTheOldest;