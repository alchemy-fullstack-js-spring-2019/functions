const repeater = require('./repeater');

describe('can repeat a function multiple times', () => {
  it('calls mock function 5 times', () => {
    const mock = jest.fn();
    repeater(5, mock);
    expect(mock).toHaveBeenCalledTimes(5);
  });
});
