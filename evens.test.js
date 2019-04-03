
const { evens, firstEven, allEvens } = require('./evens.js');

describe('evens functions', () => {
  it('returns an array of even numbers', () => {
    expect(evens([1, 2, 3, 4, 5])).toEqual(
      [2, 4]
    );
  });
  it('returns the index of the first even number', () => {
    expect(firstEven([1, 2, 3])).toEqual(1);
  });
  it('returns true if all even numbers in am Array', () => {
    expect(allEvens([2, 4, 6]));
  });
  it('returns the sum of all even numbers in the an array', () => {
    expect(sumEvens([1, 2, 3, 4, 5])).toEqual
  })
});

