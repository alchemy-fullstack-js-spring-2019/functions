const sumArray = require('./add.js');

function isEven(n) {
  return !(n % 2);
}

function evenArray(arr) {
  return arr.filter(isEven);
}

function locateFirstEven(arr) {
  return arr.findIndex(isEven);
}

function isEvenArray(arr) {
  return arr.every(isEven);
}

function sumEvenArray(arr) {
  return sumArray(evenArray(arr));
}

module.exports = {
  evenArray,
  locateFirstEven,
  isEvenArray,
  sumEvenArray
};
