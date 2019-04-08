const { double, doubleArray } = require('./double');

test('doubles the number', () => {
    expect(double(2)).toBe(4);
});

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
        it('doubles the numbers in the array', () => {
            const numbers = [2, 4, 6];
            const result = doubleArray(numbers);
            expect(result).toEqual([4, 8, 12]);
        });
    });
});



