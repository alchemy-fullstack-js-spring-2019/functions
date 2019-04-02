function numberManipulator(n, callback) {
  return callback(n);
}

function repeater(n, callback) {
  for(let i = 0; i < n; i++) {
    callback();
  }

  // [...Array(n)].forEach(callback);
}

function map(array, callback) {
  const result = [];
  for(let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

module.exports = {
  numberManipulator,
  repeater,
  map
};
