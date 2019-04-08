function add(x) {
  return x.reduce((total, n) => total + n);
}

module.exports = { add };
