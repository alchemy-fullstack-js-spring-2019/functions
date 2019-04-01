const { evens, allEvens, addEvens, firstEven } = require('./evens');

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

describe('add evens array', () => {
    it('returns sum of all evens in array', () => {
        expect(addEvens([1, 4, 3, 4])).toBe(8);
    });
});

describe('find first even array', () => {
    it('returns the first even number in an array', () => {
        expect(firstEven([1, 3, 4, 5, 6])).toBe(2);
    });
});
