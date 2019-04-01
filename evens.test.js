const evenArray = require('./evens.js');

describe('Evens', () => {
  it('Returns array of only even numbers', () => {
    const expected = [2, 4, 6];

    const input = [1, 2, 3, 4, 5, 6];

    const result = evenArray(input);

    expect(result).toEqual(expected);
  });
});
