const power = require('./power.js');

describe('exponent aka power function', () => {
  it('returns a number x to the power of y', () => {
    const result = power(3, 2);
    expect(result).toEqual(9);
  });
});
