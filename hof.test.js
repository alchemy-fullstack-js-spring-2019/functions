const { 
  numberManipulator,
  repeater,
  map
} = require('./hof.js');

describe('higher order functions', () => {
  describe('numberManipulator method', () => {
    it('plugs a number into a callback and returns the result of the callback', () => {
      const mock = jest.fn();
      numberManipulator(4, mock);
      expect(mock).toHaveBeenCalledTimes(1);
      expect(mock).toHaveBeenCalledWith(4);
    });
  });

  describe('repeater method', () => {
    it('calls a method n times', () => {
      const mock = jest.fn();
      repeater(6, mock);
      expect(mock).toHaveBeenCalledTimes(6);
    });
  });
  describe('map method', () => {
    const array = [1, 2, 4, 9];
    it('calls another function for each item in an array', () => {
      const mock = jest.fn();
      map(array, mock);
      expect(mock).toHaveBeenCalledTimes(array.length);
    });
  });
});
