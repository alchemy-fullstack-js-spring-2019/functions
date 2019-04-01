const { evens, firstEven, allEven, addEvens } = require('./evens');

describe('get even numbers from array', () => {
    describe('get all even numbers', () => {
        it('returns [2, 4] from [1, 2, 3, 4]', () => {
            const result = evens([1, 2, 3, 4]);
            expect(result).toEqual([2, 4]);
        });
    
        it('returns [8, 4] from [1, 8, 5, 3, 4]', () => {
            const result = evens([1, 8, 5, 3, 4]);
            expect(result).toEqual([8, 4]);
        });
    });

    describe('get index of first even number', () => {
        it('returns 1 from [1, 2, 3, 4]', () => {
            const result = firstEven([1, 2, 3, 4]);
            expect(result).toBe(1);
        });
        it('returns 3 from [1, 9, 3, 4]', () => {
            const result = firstEven([1, 9, 3, 4]);
            expect(result).toBe(3);
        });
    });

    describe('allEven', () => {
        it('returns true for [2, 4, 6]', () => {
            const result = allEven([2, 4, 6]);
            expect(result).toBe(true);
        });
        it('returns false for [2, 4, 6, 7]', () => {
            const result = allEven([2, 4, 6, 7]);
            expect(result).toBe(false);
        });
    });

    describe('Add even numbers in array', () => {
        it('returns 6 for [1, 2, 3, 4, 5]', () => {
            const result = addEvens([1, 2, 3, 4, 5]);
            expect(result).toBe(6);
        });
        it('returns 12 for [1, 2, 3, 4, 6]', () => {
            const result = addEvens([1, 2, 3, 4, 6]);
            expect(result).toBe(12);
        });
        it('returns 2 for [1, 2, 3, 5]', () => {
            const result = addEvens([1, 2, 3, 5]);
            expect(result).toBe(2);
        });
    });
});
