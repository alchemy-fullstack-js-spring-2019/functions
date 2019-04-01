function checkEven(n) {
  return !(n % 2);
}

function evenArray(arr) {
  return arr.filter(checkEven);
}

function locateFirstEven(arr) {
  return arr.findIndex(checkEven);
}

function checkEvenArray(arr) {
  return arr.every(checkEven);
}

module.exports = {
  evenArray,
  locateFirstEven,
  checkEvenArray
};
