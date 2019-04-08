
const add = require('./add');

const isEven = n => n % 2 === 0;

const evens = arr => {
  return arr.filter(isEven);
};

const firstEven = arr => {
  return arr.findIndex(isEven);
};

const allEven = arr => {
  return arr.every(isEven);
};

const addEven = arr => {
  return add(evens(arr));
};

module.exports = {
  evens,
  firstEven,
  allEven,
  addEven
};
