const { evens, firstEven } = require('./evens.js');

describe('evens function', () => {
  it('accepts array of numbers, returns an array with only even numbers', () => {
    const testArray = [1, 1, 2, 3, 5, 8, 13];
    const result = evens(testArray);
    expect(result).toEqual([2, 8]); 
  });

  describe('first evens function', () => {
    it('returns the index of the first even number in an array', () => {
      const expected = 2;
  
      const input = [1, 1, 2, 3, 5, 8, 13];
  
      const result = firstEven(input);
  
      expect(result).toEqual(expected);
    });
  });
});

