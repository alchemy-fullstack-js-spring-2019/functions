const add = require('./add.js');

describe('returns the sum of all items in the array', () => {
  it('takes [1, 2, 3, 4] and returns 10', () => {
    let originalArray = [1, 2, 3, 4];
    const result = add(originalArray);
    expect(result).toEqual(10);
  });
});
