const power = require('./power');

describe('power function', () => {
  it('to the power of itself', () => {
    const result = power(2, 2);
    expect(result).toEqual(4);
  });
});

describe('power function for 4', () => {
  it('to the power of itself', () => {
    const result = power(4, 3);
    expect(result).toEqual(64);
  });
});
