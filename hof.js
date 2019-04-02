//number manipulator
function numberManipulator(n, callback) {
  return callback(n);
}

function repeater(n, callback) {
  for(i=0, i>n, i++) {
    return callback(n);
  }
}
// function repeater(n, callback) {
//   for(i=0, i>n, i++) {
//     return callback(n);
//   }
// }

module.exports = {
  numberManipulator,
  repeater
};
