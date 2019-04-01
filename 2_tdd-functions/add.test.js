const sumArray = require('./add.js');

describe('sumArray', () => {
  it('Sums the contents of an array', () => {
    const array1 = [1, 2, 3, 4];
    const result = sumArray(array1);
    expect(result).toBe(10);
  });

  it('Sums the contents of an array', () => {
    const array1 = [5, 4, 3, 2, 1];
    const result = sumArray(array1);
    expect(result).toBe(15);
  });
});
