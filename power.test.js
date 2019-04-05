const power = require('./power');

describe('num to the power of 2', () => {
  it('returns 6 to the power of 2', () => {
    const result = power(6, 2);
    expect(result).toEqual(36);
  });
  it('returns -3 to the power of 2', () => {
    const result = power(-3, 2);
    expect(result).toEqual(9);
  });
});
