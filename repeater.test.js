const repeater = require('./repeater');

describe('repeats a function the specified number of times', () => {
  it('repeats console.log 5 times', () => {
    const mock = jest.fn();
    repeater(5, mock);
    expect(mock).toHaveBeenCalledTimes(5);
  });
});
