const double = require('./double');

describe('doubleIt', () => {
  // it vs test:
  it('doubles the number 3', () => {
    const result = double(3);
    expect(result).toEqual(6);
  });
});
