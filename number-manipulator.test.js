const numberManipulator = require('./number-manipulator.js');

describe('numberManipulator tests', () => {
  it('takes a number (n) and returns (n ** n) - n', () => {
    const expected = 24;

    const input = 3;
    const mockCallback = jest.fn(n => (n ** n) - n);
    const result = numberManipulator(mockCallback, input);

    expect(result).toEqual(expected);
  });
});
