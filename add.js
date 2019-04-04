function add(array) {
  let n = 0;
  array.forEach(entry => {
    n += entry;
  });
  return n;
}

module.exports = add;
