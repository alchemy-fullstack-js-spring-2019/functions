function sumOfArray(array1) {
  const sum = (total, add) => total + add;
  return array1.reduce(sum);
}
module.exports = sumOfArray;
