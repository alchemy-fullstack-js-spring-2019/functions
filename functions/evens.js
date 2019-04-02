const add = require('../functions/add');

const isEven = n => n % 2 === 0;

const evens = arr => arr.filter(isEven);

const firstEven = arr => arr.findIndex(isEven);

const allEven = arr => arr.every(isEven);

const addEvens = (arr) => {
  if(allEven(arr) === true) {
    return add(arr);
  }
};

module.exports = {
  evens,
  firstEven,
  allEven,
  addEvens
};
