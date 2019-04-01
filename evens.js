function isEven(number) {
  return number % 2 === 0;
}

function evens(listOfNumbers) {
  return listOfNumbers.filter(isEven);
}

function firstEven(listOfNumbers) {
  return listOfNumbers.findIndex(isEven);
}

module.exports = {
  evens,
  firstEven
};
