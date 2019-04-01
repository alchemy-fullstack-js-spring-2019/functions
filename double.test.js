// Node.js version of
// import double from './double';
const { double, doubleArray } = require('./double.js');

// test('Double input number', () => {
//   expect(double(4)).toBe(8);
// });

describe('double Function', () => {
  it('Doubles the number 2', () => {
    const result = double(3);
    expect(result).toEqual(6);
  });
});

// .toBe is like .equal
// .toEqual is like .deepEqual

describe('doubleArray Function', () => {
  it('Doubles the values in an array', () => {
    const array1 = [1, 2, 3];
    const result = doubleArray(array1);
    expect(result).toEqual([2, 4, 6]);
  });
});
