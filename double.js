// export double function
function double(num) {
  return num * 2;
}

function doubleArr(arr) {
  return arr.map(num => num * 2);
}

module.exports = {
  double,
  doubleArr,
};
