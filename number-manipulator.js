module.exports = { numberManipulator, repeater, maps };

function numberManipulator(n, fn) {
  return fn(n);
}

function repeater(n, callback){
  let calls = 0;
  while(calls < n){
    callback();
    calls++;
  }
}

function maps(array, callback){
  return array.map(callback);
}
