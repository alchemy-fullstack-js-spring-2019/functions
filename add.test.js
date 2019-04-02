const add = require('./add');

describe('add up all numbers in an array', () => {
  it('add 2 and 3 in an array to return 5', () => {
    const testArray1 = [2, 3];
    const result = add(testArray1);
    expect(result).toEqual(5);
  });
  
  it('add long array to return 20', () => {
    const testArray1 = [2, 5, 3, 10];
    const result = add(testArray1);
    expect(result).toEqual(20);
  });
});
