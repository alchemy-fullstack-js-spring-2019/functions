const onlyEvens = require('./only-evens');
const addArray = require('./add-array');

function addOnlyEvens(array) {

  const evenArray = onlyEvens(array);
  const sum = addArray(evenArray);

  return sum;
}

module.exports = addOnlyEvens;
