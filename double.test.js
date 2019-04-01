const double = require('./double');

// test('doubles 2 to 4', () => {
//   expect(double(2)).toBe(4);
// });

describe('double function', () => {
  it('doubles the number 2', () => {
    const result = double(2);
    expect(result).toEqual(4);
  });
  
  it('doubles the number 5', () => {
    const result = double(5);
    expect(result).toEqual(10);
  });
});
