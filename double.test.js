// Node.js version of
// import double from './double';
const double = require('./double.js');

test('Double input number', () => {
  expect(double(4)).toBe(8);
});

describe('Double Function', () => {
  it('Doubles the number 2', () => {
    const result = double(3);
    expect(result).toEqual(6);
  });
});

// .toBe is like .equal
// .toEqual is like .deepEqual
