const sumOfArray = require('./add');

describe('add functions', () => {
  it('finds sum of all values in array', () => {
    const result = sumOfArray([1, 2, 3]);
    expect(result).toEqual(6);
  });
	
  it('finds sum of all values in array', () => {
    const result = sumOfArray([2, 4, 8]);
    expect(result).toEqual(14);
  });
	
});
