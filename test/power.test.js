const power = require('../src/power.js');

describe('Get the power of 4 to turn into 16', () => {
  it('makes 4 to the power of 2 into 16', () => {
    const result = power(4, 2);
    expect(result).toEqual(16);
  });
});
