const add = require('./add');

function evens(arrayIn) {
  return arrayIn.filter(entry => entry % 2 === 0);
}

function firstEven(arrayIn) {
  return arrayIn.findIndex(entry => entry % 2 === 0);
}

function allEvens(arrayIn) {
  let allAreEven = true;
  arrayIn.forEach(entry => {
    if(entry % 2 !== 0) {
      allAreEven = false;
    }
  });
  return allAreEven;
}

function addEvens(arrayIn) {
  const evenArray = evens(arrayIn);
  return add(evenArray);
}

module.exports = { 
  evens, 
  firstEven,
  allEvens, 
  addEvens
};
