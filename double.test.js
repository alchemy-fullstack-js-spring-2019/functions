const { double, arrayDouble } = require('./double');

test('takes an array and returns its double', () => {
  const fakeArray = [2, 4, 6];
  const expected = [4, 8, 12];
  expect(arrayDouble(fakeArray)).toEqual(expected);
});

// describe('double function', () => {
//   it('doubles the number 2', () => {
//     const result = double(2);
//     expect(result).toEqual(4)
//   })
// })
