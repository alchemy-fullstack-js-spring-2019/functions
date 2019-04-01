function timesTwo(number) {
    return number * 2;
}

function doubleArray(array) {
   let newArray = array.map(function(num) {
      return timesTwo(num);
   })  
   return newArray;
}

module.exports = {
    timesTwo,
    doubleArray
}