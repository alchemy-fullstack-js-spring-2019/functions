const add = require('../src/add.js');

describe('make an array that returns the sum', () => {
  it('adds the numbers in the array and returns the total', () => {
    const result = add([1, 4, 7, 8]);
    expect(result).toEqual(20);
  });
});
