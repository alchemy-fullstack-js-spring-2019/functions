const add = require('../functions/add.js');

describe('add function', () => {
  it('add all items in array', () => {
    expect(add([1, 2, 3])).toEqual(6);
  });
});
