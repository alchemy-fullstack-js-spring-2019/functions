const {
  evens,
  firstEven,
  allEven,
  addEvens
} = require('../functions/evens');


describe('evens functions', () => {
  it('returns even numbers from array', () => {
    expect(evens([1, 2, 3, 4])).toEqual(
      [2, 4]
    );
  });
});

describe('firstEven function', () => {
  it('takes an array and returns the index of the first even number', () => {
    expect(firstEven([1, 2, 3, 4])).toEqual(1);
  });
});

describe('allEvens function', () => {
  it('returns true for even numbers in array and false for odd numbers', () => {
    expect(allEven([2, 4])).toEqual(true);
  });
});

describe('addEvens function', () => {
  it('returns the sum of only even numbers of array', () => {
    expect(addEvens([2, 4])).toEqual(6);
  });
});
