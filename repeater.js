function repeater(n, fn) {
  for(let i = 0; i < n; i++) {
    fn();
  }
}

module.exports = repeater;
