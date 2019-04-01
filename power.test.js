const power = require('./power');

describe('power function', () => {
    it('5 to the power of 2 is 25', () => {
        const result = power(5, 2);
        expect(result).toEqual(25);
    });

    it('3 to the power of 3 is 27', () => {
        const result = power(3, 3);
        expect(result).toEqual(27);
    });
});
