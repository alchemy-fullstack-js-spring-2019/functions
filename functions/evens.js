const add = require('./add.js');

const isEven = n => n % 2 === 0;

const evens = arr => arr.filter(isEven);

const firstEven = arr => arr.findIndex(isEven);

const allEven = arr => arr.every(isEven);

// const addEvens = arr => arr.add(evens);

const addEvens = (arr) => {
  if(allEven(arr) === true) {
    return add(arr);
  }
  else {
    return 'no dice';
  }
};

const addOnlyEvens = (arr) => {
  return add(evens(arr));
};
module.exports = { evens, firstEven, allEven, addEvens, addOnlyEvens };
