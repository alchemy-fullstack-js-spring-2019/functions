const power = require('./power');

describe('power function', () => {
    it('4 to the power of 2', () => {
        const result = power(4, 2);
        expect(result).toEqual(16);
    });
    it('8 to the power of 2', () => {
        const result = power(8, 2);
        expect(result).toEqual(64);
    });
});
