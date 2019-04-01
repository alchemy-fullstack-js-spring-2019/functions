function map(listOfNumbers, callback) {
  let result = [];
  listOfNumbers.forEach(n => result.push(callback(n)));
  return result;
}

module.exports = map;
