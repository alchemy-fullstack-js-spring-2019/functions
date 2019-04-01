function double(num) {
  return num * 2;
}

function doubleArray(arr) {
  return arr.map(item => item * 2);
}

module.exports = {
  double,
  doubleArray
};
