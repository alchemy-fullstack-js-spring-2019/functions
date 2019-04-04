const power = require('./power');

describe('power function', () => {
    it('returns the power of an integer', () => {
        expect(power(4, 2)).toBe(16);
    });
});
