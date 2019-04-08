function double(n) {
  return n * 2;
}

function doubleArray(arr) {
  return arr.map(double);
}

module.exports = {
  double,
  doubleArray
};
