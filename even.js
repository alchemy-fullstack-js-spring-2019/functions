module.exports = { evens, firstEven, everyEven, addEvens };
const { add } = require('./add');

function evens(array) {
  const even = array.filter(isEven);
  return even;
}

function isEven(n) {
  return n % 2 === 0;
}

function firstEven(array) {
  return array.findIndex(isEven);
}

function everyEven(array) {
  return array.every(isEven);
}

function addEvens(array) {
  return add(evens(array));
}
