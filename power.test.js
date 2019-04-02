const power = require('./power');

describe('exponent', () => {

  it('raises input to power of 2', () => {
    const actual = power(2, 2);
    expect(actual).toEqual(4);
  });
});
