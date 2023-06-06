/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
const getTheTitles = function (books) {
  const titles = [];

  for (const book of books) {
    titles.push(book.title);
  }

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
