const { double, doubleArray } = require('../functions/double.js');


describe('double funciton', () => {
  it('doubles the number', () => {
    const result = double(2);
    expect(result).toEqual(4);
  });
});

describe('double array', () => {
  it('doubles all array values', () => {
    const result = doubleArray([1, 2, 3, 4]);
    expect(result).toEqual([2, 4, 6, 8]);
  });
});
