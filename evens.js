const add = require('./add');

const isEven = n => n % 2 === 0;

function evens(arr) {
  return arr.filter(n => {
    return n % 2 === 0;
  });
}

function firstEven(arr) {
  return arr.findIndex(isEven);
}

function allEven(arr) {
  return arr.every(isEven);
}

const addEvens = arr => {
  return add(evens(arr));
};

module.exports = {
  evens,
  firstEven,
  allEven,
  addEvens
};
