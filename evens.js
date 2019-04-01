const isEven = n => n % 2 === 0;
const add = require('./add');

const addEvens = arr => {
  return add(evens(arr));
};

const ifOdd = arr => {
  return arr.every(isEven);
};

const allEvens = arr => {
  return arr.every(isEven);
};

const evens = arr => {
  return arr.filter(isEven);
};

// const evens = arr => {
// [1, 2, 3];
// 1 / 2 | 0 r 1
// 2 /2 | 1 r 0
// 3 / 2 | 1 r 1
// 4 / 2 | 2 r 0
// 5 / 2 | 2 r 1
// [2, 4]
// };



const firstEven = arr => { 
  return arr.findIndex(isEven);
};

module.exports = {
  evens,
  firstEven,
  allEvens,
  ifOdd,
  addEvens
};
