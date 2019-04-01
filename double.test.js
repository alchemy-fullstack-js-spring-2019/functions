// line below is same as writing import double from './double.js'
const { double, doubleArray } = require('./double');

// another way to write test
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
    
  describe('doubleArray function', () => {
    it('takes an array of [1, 2, 3, 4] and return [2, 4, 6, 8]', () => {
      const result = doubleArray([1, 2, 3, 4]);
      expect(result).toEqual([2, 4, 6, 8]);
    });
  });
});
