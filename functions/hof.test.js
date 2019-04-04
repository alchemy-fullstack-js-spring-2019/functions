const { numberManipulator, repeater } = require('./hof.js');

describe('establish that numberManipulator manipulates a number via another function', () => {
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

