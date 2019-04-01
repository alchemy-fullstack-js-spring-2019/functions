function double(n) {
  return n * 2;
}

function doubleArray(listOfNumbers) {
  return listOfNumbers.map(number => {
    return double(number);
  });
}
//export default double
module.exports = {
  double,
  doubleArray
};
