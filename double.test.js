const { double, doubleArr } = require('./double');

describe('double functions', () => {
  describe('double function', () => {
    // eslint-disable-next-line indent
      it('doubles the number 2', () => {
      const result = double(2);
      expect(result).toEqual(4);
    });
    describe('doubleArr function', () => {
      it('takes an array of [1, 2, 3] and return [2, 4, 8]', () => {
        expect(doubleArr([1, 2, 3])).toEqual([2, 4, 6]);
      });
      it('take an array of [3, 6, 9] and return [6, 12, 18]', () => {
        expect(doubleArr([3, 6, 9])).toEqual([6, 12, 18]);
      });
    });
  });
});

