function double(n) {
  return n * 2;
}

function doubleArray(list) {
  var newArray = [];
  list.forEach(number => {
    newArray.push(double(number));
  });
  return newArray;
}

module.exports = {
  double,
  doubleArray
};
