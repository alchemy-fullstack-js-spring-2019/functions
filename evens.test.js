const { evenArray, locateFirstEven, checkEvenArray } = require('./evens.js');

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

describe('checkEvenArray function', () => {
  it('Returns true', () => {
    const expected = true;

    const input = [2, 4, 6];

    const result = checkEvenArray(input);

    expect(result).toEqual(expected);
  });

  it('Returns false', () => {
    const expected = false;
  
    const input = [2, 4, 3];
  
    const result = checkEvenArray(input);
  
    expect(result).toEqual(expected);
  });
});
