function add(arr) {
  const numbersSum = arr.reduce((total, num) => total + num);
  return numbersSum;
  //return arr
  //    .reduce((total, num) => total + num);
} 

module.exports = add;
