const { evens, firstEven, allEven, addEvens } = require('./evens');

describe('evens functions', () => {
  describe('evens function', () => {
    it('return an array with only even numbers [2, 4]', () => {
      const result = evens([1, 2, 3, 4, 5]);
      expect(result).toEqual([2, 4]);
    });
    
    it('return an array with only even numbers [6, 8, 10]', () => {
      const result = evens([6, 7, 8, 9, 10]);
      expect(result).toEqual([6, 8, 10]);
    });
  });

  describe('firstEven function', () => {
    it('returns index 1 from [1, 2, 3 , 4]', () => {
      const result = firstEven([1, 2, 3, 4]);
      expect(result).toEqual(1);
    });

    it('returns index 3 from [1, 3, 5, 6, 8, 10]', () => {
      const result = firstEven([1, 3, 5, 6, 8, 10]);
      expect(result).toEqual(3);
    });
  });

  describe('allEven function', () => {
    it('returns true from [2, 4, 6, 8]', () => {
      const result = allEven([2, 4, 6, 8]);
      expect(result).toBeTruthy();
    });

    it('returns false from [1, 3, 5, 9]', () => {
      const result = allEven([1, 3, 5, 9]);
      expect(result).toBeFalsy();
    });
  });

  describe('addEvens function', () => {
    it('returns 6 from [1, 2, 3, 4, 5]', () => {
      const result = addEvens([1, 2, 3, 4, 5]);
      expect(result).toEqual(6);
    });

    it('returns 24 from [6, 7, 8, 9, 10]', () => {
      const result = addEvens([6, 7, 8, 9, 10]);
      expect(result).toEqual(24);
    });
  });
});
