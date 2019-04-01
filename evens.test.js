const evens = require('./evens.js');

describe('evens function', () => {
  it('accepts array of numbers, returns an array with only even numbers', () => {
    const testArray = [1, 1, 2, 3, 5, 8, 13];
    const result = evens(testArray);
    expect(result).toEqual([2, 8]); 
  });
});
