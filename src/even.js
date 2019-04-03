const add = require('./add.js');

// function even(arr) {
//   return arr.filter(n => {
//     return n % 2 === 0;
//   }); 
// }

const isEven = n => n % 2 === 0;

const evens = arr => arr.filter(isEven);

const firstEven = arr => arr.findIndex(isEven);

const allEven = arr => arr.every(isEven);

const addEven = arr => add(evens(arr));

module.exports = {
  evens,
  firstEven,
  allEven,
  addEven
};
