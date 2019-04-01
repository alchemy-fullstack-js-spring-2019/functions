// function evens(array) {
//   return array.filter((num) => {
//     (num % 2) === 0);
// }


// const isEven = n => n % 2 === 0;

// const evens = arr => arr.filter(isEven);

function evens(arr) {
  return arr.filter((num) => num % 2 === 0);
}

module.exports = evens;
