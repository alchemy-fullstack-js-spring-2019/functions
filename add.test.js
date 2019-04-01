const add = require('./add');

describe('add function', () => {
  it('adds up all elements inside [1, 2, 3, 4] to be 10', () => {
    const result = add([1, 2, 3, 4]);
    expect(result).toEqual(10);
  });
});
