const add = require('./add-functions.js');

function evens(array){
  let newArray = array.filter((number) => number % 2 === 0);
  return newArray;
}

function firstEven(array){
  const isEven = n => n % 2 === 0;
  return array.findIndex(isEven); 
}

function allEven(array){
  const isEven = n => n % 2 === 0;
  return array.every(isEven);
}

function addEvens(array){
  const evenNumbers = evens(array);
  return add(evenNumbers);
}


module.exports = {
  evens,
  firstEven,
  allEven,
  addEvens,
};
