const { double, doubleArray } = require('../functions/double');

describe('double functions', () => {
  it('doubles the number 2', () => {
    const result = double(2);
    expect(result).toEqual(4);
  });
	
  it('doubles the number 5', () => {
    const result = double(5);
    expect(result).toEqual(10);
  });
});

describe('doubleArray function', () => {
  it('takes an array of [1, 2, 3, 4] and returns [2, 4, 6, 8]', () => {
    let originalArray = [1, 2, 3, 4];
    const result = doubleArray(originalArray);
    expect(result).toEqual([2, 4, 6, 8]);
  });
});
