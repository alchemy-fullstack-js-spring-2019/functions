const { double, arrayDouble } = require('./double');

describe('double function', ()=> {
    it('double a number', () => {
        const result = double(2);
        expect(result).toEqual(4);
    });

    describe('double array function', ()=> {
        it('doubles elements in an array', ()=> {
            const result = arrayDouble([1, 2, 3]);
            expect(result).toEqual([2, 4, 6]);
        });
    });

});
