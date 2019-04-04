const { 
  double, 
  doubledArray 
}  = require('./double');

describe('doubles a number', () => {
  describe('doubles a given number', () => {
    it('doubles the number 3', () => {
      const result = double(3);
      expect(result).toEqual(6);
    });

    it('doubles the number 5', () => {
      const result = double(5);
      expect(result).toEqual(10);
    });
  });
});

describe('doubles array items', () => {
  it('doubles the numbers in array [1, 3, 4] + returns [2, 6, 8]', () => {
    expect(doubledArray([1, 3, 4])).toEqual([2, 6, 8]);
  });
});
