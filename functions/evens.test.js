const evens = require('./evens.js');

describe('return only the even numbers of an array', () => {
  it('given {1, 2, 3, 4], returns [2, 4]', () => {
    let originalArray = [1, 2, 3, 4];
    const result = evens(originalArray);
    expect(result).toEqual([2, 4]);
  });
});
