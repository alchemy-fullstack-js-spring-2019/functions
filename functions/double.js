function double(x) {
  return 2 * x;
}

function doubleArray(arr) {
  return arr.map(double);
}

module.exports = {
  double,
  doubleArray
};
