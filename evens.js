const add = require('./add');
const even = n => n % 2 === 0;

function evens(array) {
  // return array.filter(even);

  let result = [];
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    if(even(array[i])) {
      result[count] = array[i];
      count++;
    }
  }
  return result;
}

function firstEven(array) {
  return array.findIndex(even);
}

function allEven(array) {
  return array.every(even);
}

function addEvens(array) {
  return add(evens(array));
}

module.exports = {
  evens,
  firstEven,
  allEven,
  addEvens
};
