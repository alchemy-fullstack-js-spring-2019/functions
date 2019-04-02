const repeat = require('./repeater.js');

describe('repeat function', () => {
  it('Calls callback 5 times', () => {
    const expected = 5;
    const input = 5;
    const mock = jest.fn();
    repeat(input, mock);

    expect(mock.mock.calls.length).toEqual(expected);
    expect(mock).toHaveBeenCalledTimes(expected);
  });
});
