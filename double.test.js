const { double } = require('./double');
const { doubleArray } = require('./double');
const { doubleArrayalt } = require('./double');

describe('double function', () => {

  test('double 2', () => {
    const actual = double(2);
    expect(actual).toEqual(4);
  });

  test('double 3', () => {
    const actual = double(3);
    expect(actual).toEqual(6);
  });
  
});

describe('double array', () => {
  test('doubles each item in array', () => {
    const actual = doubleArray([1, 2, 3]);
    expect(actual).toEqual([2, 4, 6]);
  });

  test('doubles each item in array w map', () => {
    const actual = doubleArrayalt([1, 2, 3]);
    expect(actual).toEqual([2, 4, 6]);
  });
});
