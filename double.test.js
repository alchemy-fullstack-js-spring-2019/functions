const { timesTwo, doubleArray } = require('./double');

describe('double function', () => {
    it('doubles the number 2', () => {
         const result = timesTwo(2);
          expect(result).toEqual(4);
    })
    it('doubles an array', () => {
        const result = doubleArray([1, 2, 3, 4]);
        expect(result).toEqual([2, 4, 6, 8]);
    })
})
