const add = require ('./add');

describe('add function', () => {
  it('adds all nums in an array', () => {
    expect(add([1, 2, 3])).toEqual(6);
  });
});
