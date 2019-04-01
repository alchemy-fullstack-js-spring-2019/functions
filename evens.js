const sumOfArray = require('./add');

const isEven = n => n % 2 === 0;

function evens(array) {
  return array.filter(number => number % 2 === 0);
  // return array.filter(isEven);
}

function firstEven(array) {
  return array.findIndex(isEven);
}

function allEven(array) {
  return array.every(isEven);
}
// const allEven = array => array.every(isEven);
// const allEven = array => { return array.every(isEven); }
// const allEven = function (array) => { return array.every(isEven); }  ---- ALL SAME !!! ----

function addEvens(array) {
  return sumOfArray(evens(array));
}

// module.exports = evens;
module.exports = {
  evens,
  firstEven,
  allEven,
  addEvens
};
