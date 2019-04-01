const add = require('./add');

// describe('sum of an array', () => {
//   it('takes an array of [1, 2, 3, 4] and returns a sum of 10', () => {
//     const result = add([1, 2, 3, 4]);
//     expect(result).toEqual(10);
//   });
// });

describe('add function', () => {
  it('add all items in an array', () => {
    expect(add([1, 2, 3])).toEqual(6);
  });
});

