const { double, doubleArray } = require('./double');

describe('double function', () => {
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
  expect(doubleArray ([1, 2, 3])).toEqual([2, 4, 6]);
});


it('takes an array of [3, 6, 9] and returns [6, 12, 18]', () => {
  expect(doubleArray[3, 6, 9])).toEqual([6, 12, 18])
});
