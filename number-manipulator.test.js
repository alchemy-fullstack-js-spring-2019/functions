const numberManipulator = require('./number-manipulator');

describe('takes a number and a function that manipulates that number and returns the result', () => {
  it('takes 5 and n => n * 2 and returns 10', () => {
    expect(numberManipulator(5, n => n * 2)).toEqual(10);
  });
  it('takes 12 and n => n * n and returns 144', () => {
    expect(numberManipulator(12, n => n * n)).toEqual(144);
    const mock = jest.fn();
    numberManipulator(5, mock);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});

