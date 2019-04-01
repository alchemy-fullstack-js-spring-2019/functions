const { double, doubleArray } = require('./double.js');

describe('double function', () => {
  it('doubles the number 2', () => {
    const result = double(2);
    expect(result).toEqual(4);
  });
});

describe('double each item in an array', () => {
  it('doubles each item in an array', () => {
    let originalArray = [1, 2, 3, 4, 5];
    const result = doubleArray(originalArray);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});
