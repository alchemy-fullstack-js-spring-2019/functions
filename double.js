function double(num) {
  return num * 2;
}

function doubleArray(arr) {
  return arr.map(double);
}

module.exports = {
  double,
  doubleArray
};
