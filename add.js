function add(arr) {
  return arr.reduce((acc, n) => {
    return acc + n;
  }); 
}
module.exports = add;
