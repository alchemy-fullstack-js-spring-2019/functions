function double(num) {
  return num * 2;
}

function doubledArray(arr) {
  return arr.map(double);
}

module.exports = {
  double,
  doubledArray
};
