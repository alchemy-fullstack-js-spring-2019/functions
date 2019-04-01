const power = require('./power');

describe('power function', () => {
  it('raises 2 to the power of 4', () => {
    const result = power(2, 4);
    expect(result).toEqual(16);
  });

  it('raises 3 to the power of 2', () => {
    const result = power(3, 2);
    expect(result).toEqual(9);
  });
});
