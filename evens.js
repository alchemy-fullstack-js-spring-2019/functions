
const add = require('./add');

const isEven = n => n % 2 === 0;
//const isFirstEven = evens => evens.findIndex(0);

const evens = arr => {
  return arr.filter(isEven);
};

const firstEven = arr => {
  return arr.findIndex(isEven);
  //return evens.findIndex(evens([0]));
};

const allEven = arr => {
  return arr.every(isEven); //every returns true if all are "isEven" true
};

const addEven = arr => {
  return add(evens(arr));
  // add function adds all items in an array, our array is evens(arr)
};

module.exports = {
  evens,
  firstEven,
  allEven,
  addEven
};
