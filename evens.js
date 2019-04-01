const add = require('./add.js');

// function isEven(number) {
//   return number % 2 === 0;
// }
const isEven = n => n % 2 === 0;

function evens(listOfNumbers) {
  return listOfNumbers.filter(isEven);
}

function firstEven(listOfNumbers) {
  return listOfNumbers.findIndex(isEven);
}

function allEvens(listOfNumbers) {
  return listOfNumbers.every(isEven);
}

function addEvens(listOfNumbers) {
  return add(evens(listOfNumbers));
}

module.exports = {
  evens,
  firstEven,
  allEvens,
  addEvens
};
