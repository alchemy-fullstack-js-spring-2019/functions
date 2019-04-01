const { evenOnly, firstEven, ifAllEven, addEvens } = require('./evens');

describe('tests arrays to find even numbers', () => {
  it('takes an array and returns a new array with only its even numbers', () => {
    const fakeArray = [1, 2, 3, 4, 5, 6];
    const expected = [2, 4, 6];
    expect(evenOnly(fakeArray)).toEqual(expected);
  });
  it('finds the index of the first even number', () => {
    const fakeArray = [1, 2, 3, 4];
    const expected = 1;
    expect(firstEven(fakeArray)).toBe(expected);
    
  });
  it('takes an array and returns true if all are even', () => {
    const fakeArray = [2, 4, 6];
    const expected = 'true';
    expect(ifAllEven(fakeArray)).toEqual(expected);
  });
  it('takes an array and returns false if all are not even', () => {
    const fakeArray = [1, 3, 6];
    const expected = 'false';
    expect(ifAllEven(fakeArray)).toEqual(expected);
  });
  it('takes an array, creates a new array with only evens, then returns the sum of even numbers', () => {
    const fakeArray = [5, 6, 7, 8, 9, 10];
    const expected = 24;
    expect(addEvens(fakeArray)).toEqual(expected);
  });
})