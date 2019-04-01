const { evens, firstEven, allEven, addEvens } = require('./evens');

describe('evens function', () => {
  it('returns only evens from an array', () => {
    expect(evens([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  it('returns index of first even num in an array', () => {
    expect(firstEven([1, 2, 3])).toEqual(1);
  });

  it('returns true if all nums in array are even OR false if any numbers are odd', () => {
    expect(allEven([2, 4, 6])).toBeTruthy();
  });

  it('returns false if any num in array is odd', () => {
    expect(allEven([2, 4, 7])).toBeFalsy();
  });

});

describe('addEvens function', () => {
  it('returns sum of even nums from an array', () => {
    expect(addEvens([1, 2, 3, 4])).toEqual(6);
  });
});

