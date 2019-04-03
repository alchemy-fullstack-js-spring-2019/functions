const { double, doubleArray } = require('../src/double.js');


describe('double function', () => {
  it('doubles the number 2', () => {
    const result = double(2);
    expect(result).toBe(4);
  });
  it('doubles the number 5', () => {
    const result = double(5);
    expect(result).toEqual(10);
  });
});

describe('double array function', () => {
  it('doubles the number of the double into an array', () => {
    const result = doubleArray([1, 3, 5]); 
    expect(result).toEqual([2, 6, 10]);
  });
});
