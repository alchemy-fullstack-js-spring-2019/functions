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
