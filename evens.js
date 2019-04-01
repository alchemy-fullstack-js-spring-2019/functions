const isEven = number => number % 2 === 0;
const add = require('./add');

// arrow function one line with implicit return
const evens = array => array.filter(isEven);

// declaring a function
// function evens(array) {
//   return array.filter(isEven);
// }

// expressing a function
// const evens = function(array) {
//   return array.filter(isEven);
// }

const firstEven = array => array.findIndex(isEven);
// function firstEven(array) {
//   return array.findIndex(isEven);
// }

const allEven = array => array.every(isEven);
// function allEven(array) {
//   return array.every(isEven);
// }

const addEvens = array => add(evens(array));
// function addEvens(array) {
//   const evensArray = evens(array);
//   return add(evensArray);
// }
module.exports = { evens, firstEven, allEven, addEvens };
