const power = require('./power.js');

describe('power function', () => {
  it('will raise the number 2 to the power 3', () => {
    const result = power(2, 3);
    expect(result).toEqual(8);
  });
  it('will raise the number 3 to the power 5', () => {
    const result = power(3, 5);
    expect(result).toEqual(243);
  });
});
