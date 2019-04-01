const { evens, firstEven } = require('./evens');

describe('return only even numbers in an array', () => {
  it('only return even numbers: 2, 4, 6', () => {
    const expected = [2, 4, 6];
    const testArray1 = [1, 2, 3, 4, 5, 6, 7];
    const result = evens(testArray1);
    expect(result).toEqual(expected);
  });
});

describe('return the index of the first even number in an array', () => {
  it('return 1 (the second index)', () => {
    const expected = 1;
    const testArray1 = [1, 2, 3, 4, 5, 6, 7];
    const result = firstEven(testArray1);
    expect(result).toEqual(expected);
  });
  
  it('return 5 (the sixth index)', () => {
    const expected = 5;
    const testArray1 = [1, 1, 3, 1, 5, 6, 7];
    const result = firstEven(testArray1);
    expect(result).toEqual(expected);
  });
});
