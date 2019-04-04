function numberManipulator(n, callback) {
  return callback(n);
}

function repeater(n, callback) {
  let i = 0;
  while(i < n) {
    callback();
    i++;
  }
}

module.exports = { numberManipulator, repeater };
