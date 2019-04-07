const add = require ('./add');


describe('add function', () => {
  it('add all items in an Array', () => {
    expect(add([1, 2, 3])).toEqual(6);
  });
});
