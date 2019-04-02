module.exports = { 
  double, 
  doubleArray,
  doubleArrayalt
};

function double(number) {
  return number * 2;
}
    
function doubleArray(array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 2);
  });
  return newArray;
}

function doubleArrayalt(array) {
  return array.map(double);
}
