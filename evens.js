const isEven = n => n % 2 === 0;
const evens = arr => arr.filter(isEven);

// function firstEven(n) {
//   const firstEven = n.findIndex(evens);
//   return firstEven;
// }

const firstEven = arr => arr.findIndex(isEven);

module.exports = {
  evens,
  firstEven,
};
