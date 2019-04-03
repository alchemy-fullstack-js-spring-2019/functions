const { evens, firstEven, allEven, addEven } = require('../src/even.js');

describe('returns the even numbers from the array', () => {
  it('filters the even numbers in the array', () => {
    const result = evens([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([2, 4, 6]);
  });
});

describe('returns the first even number from the array', () => {
  it('finds the index of the first even number in the array', () => {
    const result = firstEven([1, 2, 3, 4]);
    expect(result).toEqual(1);
  });
});

describe('returns true if all numbers are even and false if they are not', () => {
  it('finds true if all even', () => {
    const result = allEven([2, 4, 6]);
    expect(result).toEqual(true);
    //toBeTruthy()
  });
  it('finds false if odd', () => {
    const result = allEven([1, 3, 5]);
    expect(result).toEqual(false);
    //toBeFalsy()
  });
});

describe('returns the sum of only the even numbers in the array', () => {
  it('finds the sum of the even numbers', () => {
    const result = addEven([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual(12);
  });
});
