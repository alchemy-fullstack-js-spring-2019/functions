function numberManipulator(n, callback) {
  return callback(n);
}

function repeater(n, callback) {
  for(let i = 0; i < n; i++) {
    callback();
  }
}

function map(array, callback) {
  let arr2 = [];
  for(let i = 0; i < array.length; i++) {
    let temp = callback(array[i]);
    arr2.push(temp);
  }
}

module.exports = {
  numberManipulator,
  repeater,
  map
};
