const power = require('./power.js');

describe('Power Function', () => {
  it('Evaluates 4^2', () => {
    const result = power(4, 2);
    expect(result).toEqual(16);
  });

  it('Evaluates 2^3', () => {
    const result = power(2, 3);
    expect(result).toEqual(8);
  });

  it('Evaluates 6^5', () => {
    const result = power(6, 5);
    expect(result).toEqual(7776);
  });
});
