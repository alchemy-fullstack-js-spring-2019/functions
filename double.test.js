const { double, doubleArray } = require('./double');

describe('double functions', () => {
  describe('double function', () => {
    it('doubles the number 2', () => {
      const result = double(2);
      expect(result).toEqual(4);
    });
  });

  describe('doubleArray function', () => {
    it('doubles each num in an array', () => {
      expect(doubleArray([2, 4, 6])).toEqual([4, 8, 12]);
    });
  });
});
