const { double, doubleArray } = require('./double');

describe('doubles a number', () => {
  it('doubles the number 4', () => {
    expect(double(4)).toEqual(8);
  });
  it('doubles the number 5', () => {
    expect(double(5)).toEqual(10);
  });
});

describe('doubles each entry in an array', () => {
  it('doubles arrayIn to arrayOut', () => {
    const arrayIn = [1, 2, 3, 5, 8, 13];
    const arrayOut = [2, 4, 6, 10, 16, 26];
    expect(doubleArray(arrayIn)).toEqual(arrayOut);
  });
});
