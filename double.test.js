const { double, doubleArray } = require('./double');

describe('double function', () => {
    it('doubles the number', () => {
        expect(double(2)).toBe(4);
    });
});

describe('double array function', () => {
    it('doubles each item in array', () => {
        expect(doubleArray([2, 4, 6])).toEqual([4, 8, 12]);
    });
});
