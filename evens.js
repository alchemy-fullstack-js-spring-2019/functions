const { add } = require('./add.js');

const isEven = n => n % 2 === 0;
const evens = arr => arr.filter(isEven);

const firstEven = arr => arr.findIndex(isEven);
const evenAll = arr => arr.every(isEven);

const addEvens = arr => {
  return add(evens(arr));
};

module.exports = {
  evens,
  firstEven,
  evenAll,
  addEvens,
};
