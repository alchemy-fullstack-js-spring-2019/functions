const evens = require('./evens');

describe('return only even numbers in an array', () => {
  it('only return even numbers: 2, 4, 6', () => {
    const expected = [2, 4, 6];
    const testArray1 = [1, 2, 3, 4, 5, 6, 7];
    const result = evens(testArray1);
    expect(result).toEqual(expected);
  });
});
