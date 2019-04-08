const { evens, firstEven, evenAll, addEvens  } = require('../functions/evens.js');


describe('even', () => {
  it('returns only even values from an array', () => {
    const result = evens([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([2, 4, 6]);
  });
});


describe('firsteven', () => {
  it('return index of first even number', () =>{
    const result = firstEven([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });
});

describe('evenAll', () => {
  it('take an array and return true if all numbers are even, false otherwise', () =>{
    const result = evenAll([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  test('given a pure even array, return true', () =>{
    expect(evenAll([2, 4, 6])).toEqual(true);
  });

  test('addEvens: sum evens', () => { 
    const result = addEvens([1, 2, 3, 4, 5]);
    expect(result).toEqual(6);
  });
});
