const power = require ('./power');

describe('power function', () => {
    it('4 to the power of 2', () => {
        const result = Math.pow(4, 2);
        expect(result).toEqual(16);
    });
});