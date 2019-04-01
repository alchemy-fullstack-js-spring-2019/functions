const { evens, firstEven, allEven, addEvens } = require('./evens');

describe('return evens from an array', () => {
    it('array of [1, 4, 6, 7] returns [4, 6]', () => {
        const array = [1, 4, 6, 7];
        expect(evens(array)).toEqual([4, 6]);
    });
});

describe('return first even of an array', () => {
    it('array of [1, 2, 3, 4] returns [2]', () => {
        const array = [1, 2, 3, 4];
        expect(firstEven(array)).toEqual(1);
    });
});

describe('returns `true` is all numbers are even or `false` if any numbers are odd', () => {
    it('array of [1, 2] returns `false`', () => {
        const array = [1, 2];
        expect(allEven(array)).toEqual('false');
    });
    
    it('array of [2, 4] returns `false`', () => {
        const array = [2, 4];
        expect(allEven(array)).toEqual('true');
    });
});

describe('adds even numbers from an array', () => {
    it('arry of [1, 2, 3, 4] returns 6', () => {
        const array = [1, 2, 3, 4];
        expect(addEvens(array)).toEqual(6);
    });

    it('arry of [2, 3, 40] returns 6', () => {
        const array = [2, 3, 40];
        expect(addEvens(array)).toEqual(42);
    });
});
