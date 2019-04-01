function double(n) { 
  return n * 2;
}

function doubleArray(arr) {
  return arr.map(double);
  //.map(n => n * 2)
  //.map(n => double(n))
}

module.exports = {
  double,
  doubleArray
};
