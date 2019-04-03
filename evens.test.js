const {
    evens,
    firstEven,
    allEvens,
    addEvens
} = require('./evens');

describe('evens functions', () => {
    it('returns array of even numbers', () => {
        expect(evens([1, 2, 3, 4, 5, 6])).toEqual(
            [2, 4, 6]
        );
    });

    it('returns first even number in array', () => {
        expect(firstEven([1, 2, 3, 4, 5, 6])).toEqual(1);
    });

    describe('allEvens', () => {
        it('returns true if all evens', () => {
            expect(allEvens([2, 4, 6])).toBeTruthy();
        });

        it('returns false if mixed array', () => {
            expect(allEvens([1, 2, 3, 4])).toBeFalsy();
        });
    });

    describe('addEvens', () => {
        it('returns sum of evens in all evens array', () => {
            expect(addEvens([1, 2, 3, 4, 5, 6])).toEqual(12);
        });
    });
});
