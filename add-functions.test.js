const add = require('./add-functions.js');

describe('add functions', () => {
  test('add all numbers in an array', () => {
    expect(add([1, 2, 3, 4])).toBe(10);
  });
});
