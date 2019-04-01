const { add } = require('../functions/add.js');

describe('add funciton', () => {
  it('take an array and return the sum of all items in the array', () => {
    const result = add([1, 2, 3, 4]);
    expect(result).toEqual(10);
  });
});
