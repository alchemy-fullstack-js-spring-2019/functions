const power = require('../functions/power.js');

describe('power function', () => {
  it('power function test', () => {
    const result = power(2, 4);
    expect(result).toEqual(16);
  });
});
