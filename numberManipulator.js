const double = n => n * 2;

function numberManipulator(n, callback) {
  return callback(n);
}
module.exports = { numberManipulator, double };
