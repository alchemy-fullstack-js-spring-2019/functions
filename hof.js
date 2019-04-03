function numberManip(x, callback) {
  return callback(x);
}

function repeater(x, callback) {
  for(let i = 0; i < x; i++) {
    callback();
  }
}

module.exports = {
  numberManip,
  repeater
};
