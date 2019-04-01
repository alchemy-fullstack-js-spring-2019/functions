function map(arr, callback) {
  const newArr = [];
  arr.forEach(i => {
    newArr.push(callback(i));
  });
  return newArr;
}

module.exports = map;
