// describe('mess with jest mocks', () => {
//   it('uses jest mocks', () => {
//     const mock = jest.fn();
//     const result = mock(4);
//     expect(result).toEqual(8);
//     expect(mock).toHaveBeenCalledTimes(1);
//     expect(mock).toHaveBeenCalledWith(4);
//   });
// });
const { numberManipulator, repeater } = require('./hof.js');
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

