const { numberManipulator, repeater, map } = require('./higher-orders');
const { double } = require('./double');

describe('higher orders', () => {
  it('return the callback with the number', () => {
    const mock = jest.fn(double);
    const result = numberManipulator(5, mock);
    expect(result).toEqual(10);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith(5);
  });
  
  it('call a callback 2 times', () => {
    const mockCallback = jest.fn(console.log('hi'));
    repeater(2, mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
  });
  
  it('map', () => {
    const mockCallback = jest.fn(n => n * 2);
    const mockArray = [2, 4, 6];
    const result = map(mockArray, mockCallback);
    expect(result).toEqual([4, 8, 12]);
    expect(mockCallback.mock.calls.length).toBe(mockArray.length);
    // same way to write above
    expect(mockCallback).toHaveBeenCalledTimes(mockArray.length);
  });
});
