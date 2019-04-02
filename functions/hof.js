function numberManipulator(n, callback) {
  return callback(n);
}

function repeater(n, callback) {
  [...Array(n)]
    .forEach(callback);
}

module.exports = {
  numberManipulator,
  repeater
};
