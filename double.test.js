const { timesTwo, doubleArray } = require('./double');

describe('double function', () => {
    it('doubles the number 2', () => {
        const result = timesTwo(2);
        expect(result).toEqual(4);
    });
});
 
describe('double array function', () => {
    it('takes an array and doubles each number', () => {
        const result = doubleArray([1, 2, 3, 4]);
        expect(result).toEqual([2, 4, 6, 8]);
    });
    it('takes another array and doubles each number', () => {
        const result = doubleArray([3, 5, 6]);
        expect(result).toEqual([6, 10, 12]);
    });
});
