//number manipulator - uses all previous functions and a parameter

//numberManipulator(5, double);
const { 
  numberManipulator,
  repeater
} = require('./hof');
// const { 
//   evens,
//   firstEven,
//   allEven,
//   addEven
// } = require('./evens');

// const double = require('./double');
// const add = require('./add');

describe('hof - manipulates numbers using a callback (cb) function and a parameter', () => {
  describe('tests array manipulation by a function', () => {
    it('can manipulate an array', () => {
      const mock = jest.fn(); // used here to be sure fn works before specifying it
      numberManipulator(5, mock);
      expect(mock).toHaveBeenCalledTimes(1);
      expect(mock).toHaveBeenCalledWith(5);
    });
    it('can repeat an fn multiple times', () => {
      const mock = jest.fn(); // used here to be sure fn works before specifying it
      repeater(5, mock);
      expect(mock).toHaveBeenCalledTimes(5);
      expect(mock).toHaveBeenCalledWith(5);
    });
  });
});

