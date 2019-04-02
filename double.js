function double(number) {
  return number * 2;
}



function doubleArray(array) {
  return array.map(item => item * 2);
}

module.exports = {
  double,
  doubleArray
};
