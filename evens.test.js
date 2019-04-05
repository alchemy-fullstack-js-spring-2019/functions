const {
  evens,
  firstEven,
  allEvens,
  ifOdd,
  addEvens
} = require('./evens');

describe('even functions', () => {
  it('takes an arr and returns only even integers', () => {
    expect(evens([1, 2, 3, 4, 5])).toEqual(
      [2, 4]
    );
  });
  describe('index position', () => {
    it('return index position of first even number', () => {
      expect(firstEven([1, 2, 3, 4])).toEqual(1);
    });
  });
  describe('true if all evens', () => {
    it('returns true if all integers are even', () => {
      expect(allEvens([2, 4, 6])).toBeTruthy();
    });
  });
  describe('return false if any integer is odd', () => {
    it('returns false if any integer is odd', () => {
      expect(ifOdd([1, 2, 3, 4, 5, 6])).toBeFalsy();
    });
  });
  describe('sum of all even integers', () => {
    it('returns a sum of all even integers in an arr', () => {
      expect(addEvens([1, 2, 3, 4, 5])).toEqual(6);
    });
  });
});

