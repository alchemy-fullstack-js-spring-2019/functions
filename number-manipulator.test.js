const { numberManipulator } = require('./number-manipulator');
const { repeater } = require('./number-manipulator');
const { maps } = require('./number-manipulator');

describe('number manipulator callback', () => {
    
  test('number manipulator tripples n w callback', () => {
    const trip = jest.fn(n => n * 3);
    const actual = numberManipulator(3, trip);
    expect(trip).toHaveBeenCalledWith(3);
    expect(trip).toHaveBeenCalledTimes(1);
    expect(actual).toEqual(9);
  });

});

describe('repeater', () => {

  test('calls function x number of times', () => {
    const mockCallback = jest.fn(n => n + 2);
    repeater(11, mockCallback);
    expect(mockCallback.mock.calls.length).toBe(11);
    expect(mockCallback).toHaveBeenCalledWith(11);
  });

});

describe('map function', () => {
  test('callback on each number in array', () => {
    const trip = n => n * 3;
    const actual = maps([3, 4, 5], trip);
    expect(actual).toEqual([9, 12, 15]);
  });

  test('different callback on each num in array', () => {
    const exp = n => n ** 2;
    const actual = maps([1, 2, 3], exp);
    expect(actual).toEqual([1, 4, 9]);
  });

});
