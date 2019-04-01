const evens = require('./evens');

describe('get even numbers from array', () => {
    it('returns [2, 4] from [1, 2, 3, 4]', () => {
        const result = evens([1, 2, 3, 4]);
        expect(result).toEqual([2, 4]);
    });

    it('returns [8, 4] from [1, 8, 5, 3, 4]', () => {
        const result = evens([1, 8, 5, 3, 4]);
        expect(result).toEqual([8, 4]);
    });
});
