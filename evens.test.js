const { evenArray, locateFirstEven, isEvenArray, sumEvenArray } = require('./evens.js');

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

describe('isEvenArray function', () => {
  it('Returns true', () => {
    const expected = true;
    const input = [2, 4, 6];
    const result = isEvenArray(input);

    expect(result).toEqual(expected);
  });

  it('Returns false', () => {
    const expected = false;
    const input = [2, 4, 3];
    const result = isEvenArray(input);
  
    expect(result).toEqual(expected);
  });
});

describe('sumEvenArray function', () => {
  it('Returns 14', () => {
    const expected = 14;
    const input = [2, 4, 8];
    const result = sumEvenArray(input);

    expect(result).toEqual(expected);
  });

  it('Return 20', () => {
    const expected = 20;
    const input = [1, 2, 5, 6, 7, 4, 8, 9];
    const result = sumEvenArray(input);
  
    expect(result).toEqual(expected);
  });
});
