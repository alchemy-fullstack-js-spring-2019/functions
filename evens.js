function evens(listOfNumbers) {
  return listOfNumbers.filter(number => number % 2 === 0);
}

module.exports = evens;
