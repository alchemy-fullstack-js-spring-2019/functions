const isEven = num => num % 2 === 0;

function firstEven(array) {

  const firstEvenNum = array.findIndex(isEven);
  return array[firstEvenNum];
}

module.exports = firstEven;
