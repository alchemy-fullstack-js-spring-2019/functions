const { double } = require('./hof.js');

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

//another way:
// spread array? 
// [...Array(n()].forEach(callback);

//and another:
//for(let i = 0; i < n; i++) {
  // callback();
// }