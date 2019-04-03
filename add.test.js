const add = require ('./add.js');

describe('add function', () => {
  it('adds all values in an array, returns single sum', () => {
    const testArray = [1, 1, 2, 3, 5, 8, 13];
    const result = add(testArray);
    expect(result).toEqual(33);
  });
});
