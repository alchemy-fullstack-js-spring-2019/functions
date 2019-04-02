const { double } = require('../functions/double');
const { numberManipulator, repeater } = require('../functions/hof');

describe('hof', () => {
  it('can manipulate a number', () => {
    const mock = jest.fn();

    numberManipulator(5, mock);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith(5);
  });

  it('can repeat a function multiple times', () => {
    const mock = jest.fn();
    repeater(10, mock);
    expect(mock).toHaveBeenCalledTimes(10);
  });
});
