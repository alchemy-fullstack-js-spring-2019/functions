// function sum(arr) {
//   return Math.add([1, 2, 3, 4]);
// }
// module.exports = sum;

function add(arr) {
  return arr.reduce((acc, n) => {
    return acc + n;
  }); 
}
module.exports = add;

// acc is the accumulator
// steps through array
// 1
// 1 + 2
// 3 + 3
// 6
