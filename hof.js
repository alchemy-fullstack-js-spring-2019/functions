function numberManip(n, callback) {
  return callback(n);
}

function repeater(n, callback) {
  [...Array(n)].forEach(callback);
}

module.exports = { numberManip, repeater };
