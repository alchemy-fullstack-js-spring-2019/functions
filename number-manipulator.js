module.exports = { numberManipulator, repeater, maps };

function numberManipulator(n, fn) {
  return fn(n);
}

function repeater(n, callback){
  let calls = 0;
  while(calls < n){
    callback(n);
    calls++;
  }
}
// [...Array(n)].forEach(callback); dots fills holes in empty array.

function maps(array, callback){
  let newArray = [];
  array.forEach(number => {
    newArray.push(callback(number));
  });
  return newArray;
}
