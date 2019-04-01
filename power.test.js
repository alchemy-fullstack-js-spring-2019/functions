const power = require('./power');

describe('power function', () => {
  it('multiples first num by itself the # of times of the 2nd num', () => {
    const result = power(4, 2);
    expect(result).toEqual(16);
  });
});
