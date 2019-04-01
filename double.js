function double(number) {
  return number * 2;
}
// const double = number => number * 2

function doubleArray(array) {
  // return array.map(number => number * 2);
  // for every number in the array, multiply by 2 and put into new array
  // we call our double function to replace the `number * 2` to not write repetitive code
  // return array.map(number => double(number));
  // if we wrote our double function like on line 6, then we can condense this even more to below
  return array.map(double);
}
// line below is same as writing export default double
module.exports = { double, doubleArray };
