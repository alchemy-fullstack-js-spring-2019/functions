const power = require('./power');

test('takes 2 numbers, an integer and a power, and returns that integer to its power', () => {
  expect(power(4, 2)).toBe(16);
});
