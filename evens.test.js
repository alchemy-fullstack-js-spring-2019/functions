const { evens, firstEven, allEvens, addEvens } = require('./evens.js');

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

  describe('all evens function', () => {
    it('returns true when passed [2, 4, 6]', () => {
      const expected = true;
  
      const input = [2, 4, 6];
  
      const result = allEvens(input);
  
      expect(result).toEqual(expected);
    });

    it('return false when passed [2, 4, 6, 7]', () => {
      const expected = false;
    
      const input = [2, 4, 6, 7];
    
      const result = allEvens(input);
    
      expect(result).toEqual(expected);
    });
  });
  describe('add evens function', () => {
    it('returns the sum of all even numbers in an array', () => {
      const expected = 22;
  
      const input = [3, 4, 7, 11, 18, 29];
  
      const result = addEvens(input);
  
      expect(result).toEqual(expected);
    });
  });
});

