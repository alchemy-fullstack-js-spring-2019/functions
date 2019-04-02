const { numberManip, repeater } = require('./hof');

describe('messing with mock function', () => {
  it('uses mocks', () => {
    const mock = jest.fn(x => x * 2);
    const result = numberManip(5, mock);
    expect(result).toEqual(10);
  });
  it('can repeat the function multiple times', () => {
    const mock = jest.fn();
    repeater(10, mock);
    expect(mock).toHaveBeenCalledTimes(10);
  });
});