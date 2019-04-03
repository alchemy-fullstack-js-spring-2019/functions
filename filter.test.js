const { filter } = require('./filter.js');

describe('filter', () => {
  it('filters an array', () => {
    const odd = n => n % 2 !== 0;
    const actual = filter([1, 2, 3], odd);
    expect(actual).toEqual([1, 3]);
  });
});
