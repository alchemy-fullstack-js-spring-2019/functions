const power = require('./power');

describe('power function', () => {
    it('multiplies the number by the specified power', () => {
         const result = power(2, 4);
          expect(result).toEqual(16);
    })
})