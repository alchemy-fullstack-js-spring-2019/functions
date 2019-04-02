const map = require('./map.js');
const { double } = require('../2_tdd-functions/double.js');

describe('map function', () => {
  it('double every item in the array', () => {
    const expected = [2, 4, 8, 10];
    const input = [1, 2, 4, 5];
    const mock = jest.fn(double);
    const result = map(input, mock);

    expect(result).toEqual(expected);
    expect(mock.mock.calls.length).toBe(4);
  });
});
