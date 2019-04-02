const { evens, firstEven, allEven, addEvens } = require('./even-functions.js');

describe('evens function', () => {
  test('return only evens', () => {
    expect(evens([1, 2, 3])).toEqual([2]);
  });

  test('return first even', () => {
    expect(firstEven([2, 3, 4])).toEqual(0);
  });

  test('return true if all are evens', () => {
    expect(allEven([2, 4, 6])).toBe(true);
    expect(allEven([2, 3, 6])).toBe(false);
  });

  test('add all evens in an array', () => {
    expect(addEvens([2, 4, 6])).toEqual(12);
    expect(addEvens([2, 3, 6])).toEqual(8);
  });

});
