function double(x) {
  return x * 2;
}

function arrayDouble(array) {
  const doubleArray = array.map(item => double(item));
  //could be written as just .map(double) as shortcut
  return doubleArray;
}

module.exports = {
  double,
  arrayDouble
};

//module.exports = {
//double
//};
//here you can export more than 1 function to be tested
