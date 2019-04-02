const { double, doubleArray } = require('./double');

// test('doubles 2 to 4', () => {
//   expect(double(2)).toBe(4);
// });

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

describe('double array function', () => {
  it('doubles an array of 2s to 4s', () => {
    const testArray1 = [2, 2, 2, 2];
    const result = doubleArray(testArray1);
    expect(result).toEqual([4, 4, 4, 4]);
  });
  
  it('doubles an array of diffs to diffs x 2', () => {
    const testArray1 = [2, 3, 5, 10];
    const result = doubleArray(testArray1);
    expect(result).toEqual([4, 6, 10, 20]);
  });
});
