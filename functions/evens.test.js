const { evens, firstEven, allEven, addEvens, addOnlyEvens } = require('./evens.js');

describe('return only the even numbers of an array', () => {
  it('given {1, 2, 3, 4], returns [2, 4]', () => {
    let originalArray = [1, 2, 3, 4];
    const result = evens(originalArray);
    expect(result).toEqual([2, 4]);
  });
});

describe('take an array and return the first even number', () => {
  it('given [1, 2, 3, 4] returns 2', () => {
    expect(firstEven([1, 2, 3])).toEqual(1);
  });
});

describe('take an array and return if all are even, false if any are odd', () => {
  it('given [2, 4, 6], returns true', () => {
    expect(allEven([2, 4, 6])).toEqual(true);
  });
  it('given [1, 2, 3, 4], returns false', () => {
    expect(allEven([1, 2, 3, 4])).toEqual(false);
  });
});

describe('take an array, return sum if the numbers in array are all even', () => {
  it('given [2, 4, 6}, returns 12', () => {
    expect(addEvens([2, 4, 6])).toEqual(12);
  });
  it('given [1, 2, 3], return no dice', () => {
    expect(addEvens([1, 2, 3])).toEqual('no dice');
  });
});

describe('take array add the evens together', () => {
  it('given [1, 2, 3, 4], return 6', () => {
    expect(addOnlyEvens([1, 2, 3, 4])).toEqual(6);
  })
})