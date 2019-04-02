const add = require('./add');

//without methods
// function evenOnly(array) {
//   const evenArray = [];
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 0) {
//       evenArray.push(array[i]);
//     }
//   }
//   return evenArray
// }

//easy way
function evenOnly(array) {
  return array.filter(item => item % 2 === 0);
}
//--------------------------------------------------------------------------

//without recommended method
function firstEven(array) {
  const firstEvenNum = evenOnly(array)[0];
  return array.indexOf(firstEvenNum);
}
//easy way
//could also use findIndex

//--------------------------------------------------------------------------

function checkIfEven(item) {
  return item % 2 === 0;

}
//--------------------------------------------------------------------------

//without methods 
// function ifAllEven(array) {
//   let total = 0;
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 0) {
//       total+=1;
//     }
//   }
//   if(total === array.length) {
//     return 'true';
//   }
//   return 'false';
// }

//easy way
function ifAllEven(array) {
  if(array.every(checkIfEven)) {
    return 'true';
  }
  return 'false';
}

//--------------------------------------------------------------------------
//without methods


//easy way
function addEvens(array) {
  const evenArray = evenOnly(array);
  return add(evenArray);
}

module.exports = {
  evenOnly,
  firstEven,
  ifAllEven,
  addEvens
};
