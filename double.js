function double(thing) {
  return thing * 2;
}

// function doubleArray(arr) {
//   var doubled = [];
//   for(var i = 0; i < arr.length; i++) {
//     doubled.push(arr[i] * 2);
//   }
//   return doubled;
// }

function doubleArray(arr) {
  // return arr.map(double); SAME THING
  return arr.map(n => n * 2);
}

module.exports = {
  double,
  doubleArray
};
