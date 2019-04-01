const power = require('./power');

describe('num to the power of 2', () => {
  it('returns num to the power of 2', () => {
    const result = power(6);
    expect(result).toEqual(36);
  });
});
