function evenArray(arr) {
  return arr.filter(n => !(n % 2));
}

function locateFirstEven(arr) {
  return arr.findIndex(n => !(n % 2));
}

module.exports = {
  evenArray,
  locateFirstEven
};
