const repeater = require('./repeater.js');

describe('repeater tests', () => {
  it('repeats a function call n times', () => {
    const mockCallback = jest.fn(x => 42 + x);
    const expected = 5;

    const input = 5;

    repeater(input, mockCallback);

    expect(mockCallback.mock.calls.length).toBe(expected);
  });
});
