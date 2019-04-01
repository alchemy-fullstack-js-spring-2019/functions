function sumOfArray(array1) {
  const sum = (total, add) => total + add;
  return array1.reduce(sum);
}
// [1, 2, 3];
// 1
// 1 + 2
// 3 + 3
// how total works running through array
module.exports = sumOfArray;
