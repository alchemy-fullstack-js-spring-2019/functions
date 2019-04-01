// const reducer = (sum, currentValue) => sum + currentValue;
function add(listOfNumbers) {
  return listOfNumbers.reduce((sum, currentValue) => sum + currentValue);
}

module.exports = add;
