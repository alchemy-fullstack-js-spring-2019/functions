//import double from ./double.js
const { double, doubleArray } = require('./double.js');

describe('double function', () => {
  it('doubles the number 2', () => {
    const result = double(2);
    expect(result).toEqual(4);
  });
});

describe('doubleArray function', () => {
  it('doubles each number in an array', () => {
    const testArray = [1, 1, 2, 3, 5, 8, 13];
    const result = doubleArray(testArray);
    expect(result).toEqual([2, 2, 4, 6, 10, 16, 26]);
  });
});

//toBe is deepEqual
//toEqual is shallow
