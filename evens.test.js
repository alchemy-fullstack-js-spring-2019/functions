const { evens, firstEven, allEven, addEvens } = require('./evens');

describe('evens functions', ()=> {
    describe('will return an array of only the even numbers from test array', () => {
        it('will return an array of [2, 4, 6, 8]', ()=> {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const result = evens(array);
            expect(result).toEqual([2, 4, 6, 8]);
        });
    });

    describe('will return index of first even number', () => {
        it('will return 1', ()=> {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const result = firstEven(array);
            expect(result).toEqual(1);
        });
    });

    describe('will return true if all numbers in array are even', () => {
        it('will return true', ()=> {
            const array = [2, 4, 6, 8, 10];
            const result = allEven(array);
            expect(result).toBeTruthy; //the same as toEqual(true)
        });

        it('will return false', ()=> {
            const array = [2, 4, 6, 7, 8, 10];
            const result = allEven(array);
            expect(result).toBeFalsy;
        });
    });

    describe('all even numbers in an array will be added together', () => {
        it('will return 30', () => {
            const array = [1, 2, 4, 6, 8, 10];
            const result = addEvens(array);
            expect(result).toEqual(30);
        });
        it('will return 2', () => {
            const array = [1, 2, 3, 5, 7, 11];
            const result = addEvens(array);
            expect(result).toEqual(2);
        });
    });

});
