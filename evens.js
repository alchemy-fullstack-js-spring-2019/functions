function evens(arr) {
  return arr.filter(n => {
    return n % 2 === 0;
  });
}

module.exports = {
  evens
};
