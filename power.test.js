const power = require('./power');

describe('to the power of fn', () => {
    it('2 ^ 4 = 16', () => {
        const result = power(2, 4);
        expect(result).toEqual(16);
    });
});