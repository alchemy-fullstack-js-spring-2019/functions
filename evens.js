const sumArray = require('./add.js');

// function isEven(n) {
//   return !(n % 2);
// }
const isEven = n => !(n % 2);

// function evenArray(arr) {
//   return arr.filter(isEven);
// }
const evenArray = arr => arr.filter(isEven);

// function locateFirstEven(arr) {
//   return arr.findIndex(isEven);
// }
const locateFirstEven = arr => arr.findIndex(isEven);

// function isEvenArray(arr) {
//   return arr.every(isEven);
// }
const isEvenArray = arr => arr.every(isEven);

// function sumEvenArray(arr) {
//   return sumArray(evenArray(arr));
// }
const sumEvenArray = arr => sumArray(evenArray(arr));

module.exports = {
  evenArray,
  locateFirstEven,
  isEvenArray,
  sumEvenArray
};
