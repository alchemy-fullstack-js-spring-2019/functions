const { evens, allEvens } = require('./evens');

describe('evens array', () => {
    it('returns only even numbers', () => {
        expect(evens([1, 2, 3, 4])).toEqual([2, 4]);
    });
});

describe('all evens array', () => {
    it('returns true if all numbers in array are even', () => {
        expect(allEvens([1, 2, 4])).toBe(false);
    });
});
