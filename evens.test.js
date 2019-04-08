const { evens, firstEven, allEven, addEvens } = require('./evens');

describe('even functions', () => {
    describe('evens function', () => {
        it('returns an array of even numbers', () => {
            const numbers = [1, 2, 3, 4, 5, 6];
            const result = evens(numbers);
            expect(result).toEqual([2, 4, 6]);
        });
    });

    describe('function returns index of first even number', () => {
        it('returns 3', () => {
            const numbers = [1, 3, 5, 4, 6];
            const result = firstEven(numbers);
            expect(result).toEqual(3);
        });
        
        it('returns 2', () => {
            const numbers = [1, 3, 2, 4, 6];
            const result = firstEven(numbers);
            expect(result).toEqual(2);
        });
    });

    describe('function returns true if all numbers even', () => {
        it('returns true', () => {
            const numbers = [2, 4, 6];
            const result = allEven(numbers);
            expect(result).toEqual(true);
        });
        it('returns false', () => {
            const numbers = [3, 4, 6];
            const result = allEven(numbers);
            expect(result).toEqual(false);
        });
    });

    describe('addEvens', () => {
        it('returns sum of all even numbers in array', () => {
            const numbers = [1, 2, 3, 4, 5, 6];
            const result = addEvens(numbers);
            expect(result).toEqual(12);
        });
    });
});
