function add(array) {
  // return array.reduce((acc, n) => acc + n);
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

module.exports = add;
