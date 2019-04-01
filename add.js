module.exports = { add, addReduce };

function add(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

function addReduce(array) {
  let sum = array.reduce(function(total, num) {
    return total + num;
  });
  return sum;
}
