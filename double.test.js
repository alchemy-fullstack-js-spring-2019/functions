const { double } = require('./double');

test('multiply 2 times 2 to equal 4', () => {
    expect(double(2)).toEqual(4);
});

describe('double an array', () => {
    it('doubles that bad boy', () => {
        const array = [2, 3, 4];
        const doubledArray = array.map(double);

        expect(doubledArray).toEqual([4, 6, 8]);
    });
});
