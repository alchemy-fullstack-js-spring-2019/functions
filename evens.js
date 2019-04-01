const add = require('./add');

// function evenOnly(array) {
//   const evenArray = [];
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 0) {
//       evenArray.push(array[i]);
//     }
//   }
//   return evenArray
// }

function evenOnly(array) {
  return array.filter(item => item % 2 === 0)
}

function firstEven(array) {
  const firstEvenNum = evenOnly(array)[0];
  return array.indexOf(firstEvenNum);
}
//could also use findIndex (easier way??)

//easy way
function checkIfEven(item) {
  return item % 2 === 0;

}
function ifAllEven(array) {
  if(array.every(checkIfEven)) {
    return 'true';
  }
  return 'false'
}

function addEvens(array) {
  const evenArray = evenOnly(array);
  return add(evenArray);
}

module.exports = {
  evenOnly,
  firstEven,
  ifAllEven,
  addEvens
}