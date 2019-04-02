function double(number) {
  return number * 2;
}

function doubleArray(array) {
  let result = [];
  for(let i = 0; i < array.length; i ++) {
    result[i] = double(array[i]);
  }
  return result;
}

module.exports = {
  double,
  doubleArray
};
