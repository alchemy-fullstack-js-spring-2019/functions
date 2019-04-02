const numberManipulator = require('./numberManipulator.js');
const { double } = require('../2_tdd-functions/double.js');

describe('numberManipulator function', () => {
  it('Returns 10', () => {
    const expected = 10;
    const input = 5;
    const callback = double;
    const result = numberManipulator(input, callback);

    expect(result).toEqual(expected);
  });

  it('Returns 25', () => {
    const expected = 25;
    const input = 5;
    const callback = n => n ** 2;
    const result = numberManipulator(input, callback);
  
    expect(result).toEqual(expected);
  });
});
