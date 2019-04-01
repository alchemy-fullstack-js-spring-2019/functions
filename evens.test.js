const { evens } = require ('./evens');

describe('evens function', () => {
  it('returns only evens from an array', () => {
    expect(evens([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
});
