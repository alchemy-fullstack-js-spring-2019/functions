function double(thing) {
  return thing * 2;
}

function doubleArray(arr) {
  return arr.map(n => n * 2);
}

module.exports = {
  double,
  doubleArray
};
