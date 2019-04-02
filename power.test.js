const power = require('./power');

describe('power tests', () => {
    it('2 to the power of 3 is 8', () => {
        const result = power(2, 3);
        expect(result).toBe(8);
    });
    it('4 to the power of 2 is 16', () => {
        const result = power(4, 2);
        expect(result).toBe(16);
    });
});
