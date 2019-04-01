const { evens, firstEven } = require('./evens');

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
});
