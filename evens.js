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


module.exports = {
  evenOnly,
  firstEven
}