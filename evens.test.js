const { evens, firstEven } = require('../functions/evens.js');


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
