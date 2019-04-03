const add = require('./add');

test('takes an array and returns the sum of all integers in the array', () => {
  const fakeArray = [2, 3, 4];
  const expected = 9;
  expect(add(fakeArray)).toEqual(expected); 
});
