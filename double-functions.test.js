const { double, doubleArray } = require('./double-functions.js');


describe('double function', () => {
  test('doubles integers', () => {
    expect(double(2)).toBe(4);
  });
});

describe('doubleArray Function', () => {
  test('doubles an array', () => {
    expect(doubleArray([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
  });
});

