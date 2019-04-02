module.exports = { numberManipulator, repeater, maps, findIndex };

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

function findIndex(array, callback) {
  for(let i = 0; i < array.length; i++){
    if(callback(array[i])){
      return i;
    } 
  }
}


