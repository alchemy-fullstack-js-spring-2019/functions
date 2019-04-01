const { evens, firstEven } = require('./evens');

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
    });
});
