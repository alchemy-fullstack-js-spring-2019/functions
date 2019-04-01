const {
  evens 
} = require('./evens');

describe('even functions', () => {
  it('takes an arr and returns only even integers', () => {
    expect(evens([1, 2, 3, 4, 5])).toEqual(
      [2, 4]
    );
  });
});
