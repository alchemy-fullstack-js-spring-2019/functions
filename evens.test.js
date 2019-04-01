const { evens, firstEven, allEvens, addEvens } = require('./evens');

describe('returns only even entries of an array', () => {
    it('from an array of [0, 1, 2, 3, 5, 8, 13, 21] returns [0, 2, 8]',  () => {
        const arrayIn = [0, 1, 2, 3, 5, 8, 13, 21];
        const arrayOut = [0, 2, 8];
        expect(evens(arrayIn)).toEqual(arrayOut);
    });
});

describe('returns first even entry of an array', () => {
    it('from an array of [0, 1, 2, 3, 5, 8, 13, 21] returns 0',  () => {
        const arrayIn = [0, 1, 2, 3, 5, 8, 13, 21];
        expect(firstEven(arrayIn)).toEqual(0);
    });
});

describe('returns true if all entries are even and false if any entries are odd', () => {
    it('from an array of [2, 4, 6, 8] returns true',  () => {
        const arrayIn = [2, 4, 6, 8];
        expect(allEvens(arrayIn)).toBe(true);
    });
    it('from an array of [2, 4, 6, 8, 9] returns false',  () => {
        const arrayIn = [2, 4, 6, 8, 9];
        expect(allEvens(arrayIn)).toBe(false);
    });
});

describe('returns the sum of all even entries', () => {
    it('from an array of [0, 1, 2, 3, 5, 8, 13, 21, 34] returns 44',  () => {
        const arrayIn = [0, 1, 2, 3, 5, 8, 13, 21, 34];
        expect(addEvens(arrayIn)).toEqual(44);
    });
});
