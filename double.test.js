const { double, doubleArray } = require('./double');

describe('double functions', () => {

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
    it('doubles values in array [1, 2, 3]', () => {
      const result = doubleArray([1, 2, 3]);
      expect(result).toEqual([2, 4, 6]);
    });
  });
	
});


