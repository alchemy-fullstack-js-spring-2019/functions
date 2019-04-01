const { evens, firstEven, allEvens, addEvens } = require('./evens');

describe('even integer array', ()=> {
    it('creates array of only even integers', ()=> {
        const result = evens([1, 2, 3, 4, 5, 6]);
        expect(result).toEqual([2, 4, 6]);
    });

    describe('first evens function', ()=> {
        it('gives index of first even integer', ()=> {
            const result = firstEven([1, 2, 3, 4, 5]);
            expect(result).toEqual(1);
        });
    });

    describe('all even function', () => {
        it('take array and return true if integers are true false otherwise', () => {
            const result = allEvens([1, 2, 3, 4, 5, 6]);
            expect(result).toEqual(false);
        });
    });

    describe('add evens function', () => {
        it('function that takes an array and adds the sum of the even integers', () => {
            const result = addEvens([1, 2, 3, 4, 5, 6]);
            expect(result).toEqual(12);
        });
    });
});
