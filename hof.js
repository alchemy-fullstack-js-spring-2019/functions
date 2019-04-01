// higher order function
// takes a function as an arg
// function executor(fn) {
//   fn();
// }
// // it returns a function
// function add(n) {
//   return function(x) {
//     return n + x;
//   };
// }
// add(1)(2);

function numberManipulator(n, callback) {
  callback(n);
}

function repeater(n, callback) {
  for(let i = 0; i < n; i++) {
    callback();
  }
}

module.exports = {
  numberManipulator,
  repeater
};
