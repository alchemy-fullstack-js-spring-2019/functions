const { evenArray, locateFirstEven } = require('./evens.js');

describe('evenArray function', () => {
  it('Returns array of only even numbers', () => {
    const expected = [2, 4, 6];

    const input = [1, 2, 3, 4, 5, 6];

    const result = evenArray(input);

    expect(result).toEqual(expected);
  });
});

describe('locateFirstEven function', () => {
  it('Returns the index of 2', () => {
    const expected = 1;

    const input = [1, 2, 3, 4, 5, 6];

    const result = locateFirstEven(input);

    expect(result).toEqual(expected);
  });

  it('Returns the index of 8', () => {
    const expected = 4;
  
    const input = [9, 11, 5, 7, 8, 2, 4];
  
    const result = locateFirstEven(input);
  
    expect(result).toEqual(expected);
  });

});
