
function double(num) {
  return num * 2;
}

function doubledArray(arr) {
  return arr.map(double);
  //or return arr.map(n => n * 2);
}

module.exports = {
  double,
  doubledArray
};
//exports default module
//module.exports = {
//  double, 
//  function2
//};
//then require it with const { double, function2 } = require
//('./double');
//const obj = { a: 'a', b: 'b' };
//const { a } = obj;  (**means item a in object**)
//
