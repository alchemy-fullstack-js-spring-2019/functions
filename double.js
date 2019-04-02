function double(a) {
  return a * 2;
}

function doubleArray(arr) {
  return arr.map(double);
}

module.exports = {
  double,
  doubleArray
};
