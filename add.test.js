const add = require('./add');

describe('add function', () => {
  it('adds items in array', () => {
    expect(add([1, 2, 3])).toEqual(6);
  });
});
