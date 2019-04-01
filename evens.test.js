const { evenOnly, firstEven } = require('./evens');

describe('tests arrays to find even numbers', () => {
  it('takes an array and returns a new array with only its even numbers', () => {
    const fakeArray = [1, 2, 3, 4, 5, 6];
    const expected = [2, 4, 6];
    expect(evenOnly(fakeArray)).toEqual(expected);
  })
  it('finds the index of the first even number', () => {
    const fakeArray = [1, 2, 3, 4];
    const expected = 1;
    expect(firstEven(fakeArray)).toBe(expected);
    
  })
})