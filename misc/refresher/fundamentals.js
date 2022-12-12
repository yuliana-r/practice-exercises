// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// let schedule = {};

// function isEmpty(item) {
//     return Object.keys(item).length === 0;
// }

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   function sumSalaries(obj) {
//     let sum = 0;
//     for (let name in obj) {
//         sum += obj[name];
//     }

//     return sum;
//   }

//   console.log(sumSalaries(salaries));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === Number);
        obj[key] *= 2;
    }

    return obj;
  }

  console.log(multiplyNumeric(menu));