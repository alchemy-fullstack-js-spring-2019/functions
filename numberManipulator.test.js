const { numberManipulator, double } = require('./numberManipulator');

describe('numberManipulator function', () => {
  it('takes in number 2 and doubles it to 4', () => {
    const result = numberManipulator(2, double);
    expect(result).toEqual(4);
  });

  it('takes in number 5 and doubles it to 10', () => {
    const result = numberManipulator(5, double);
    expect(result).toEqual(10);
  });
});

// describe('numberManipulator function', () => {
//   it('can manipulate a number', () => {
//     const mock = jest.fn();
//     numberManipulator(5, mock);
//     expect(mock).toHaveBeenCalledTimes(1);
//     expect(mock).toHaveBeenCalledWith(5);
//   });
// });
