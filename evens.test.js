const { evens, firstEven, allEven, addEvens } = require('./evens');

describe('evens testing', () => {
  describe('all evens testing', () => {
    it('filters evens of array', () => {
      const result = evens([1, 2, 3, 4]);
      expect(result).toEqual([2, 4]);
    });
    
    it('find index of firstEven in array', () => {
      const result = firstEven([1, 2, 3, 4]);
      expect(result).toEqual(1);
    });

    it('return true if array allEven', () => {
      const result = allEven([2, 4, 6, 8]);
      expect(result).toEqual(true);
    });
    it('return true if array allEven', () => {
      const result = allEven([1, 4, 6, 9]);
      expect(result).toEqual(false);
    });

    it('sum of only evens addEvens', () => {
      const result = addEvens([1, 2, 3, 4]);
      expect(result).toEqual(6);
    });

  });
    
});
