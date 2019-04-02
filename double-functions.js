function double(x){
  return x * 2;
}


function doubleArray(array) {
  let doubled = [];

  array.forEach(number => {
    doubled.push(double(number));
  });

  return doubled;
}

module.exports = {
  double,
  doubleArray
};

