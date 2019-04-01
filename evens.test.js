const { evens, firstEven, allEven } = require('./evens');

describe('returns even numbers in an array', () => {
    it('returns an array of even numbers', () => {
        const result = evens([1, 4, 8, 9]);
        expect(result).toEqual([4, 8]);
    });
});

describe('returns index of first even number in array', () => {
    it('returns the index of the first even number in the array', () => {
        const result = firstEven([1, 2, 3, 4]);
        expect(result).toEqual(1);
    });
});

describe('returns true if all numbers in an array are even', () => {
    it('returns true if all numbers in an array are even', () => {
        const result = allEven([2, 4, 6]);
        expect(result).toEqual(true);
    });
});
