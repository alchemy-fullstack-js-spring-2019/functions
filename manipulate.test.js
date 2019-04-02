const { manipulate, repeater }  = require('./manipulate.js');
const mockCallback = jest.fn(n => n * 2);
const mock = jest.fn();

describe('manipulate number function tests', () => {
  test('double', () => {
    expect(manipulate(2, mockCallback)).toEqual(4);
  });
  
  test('repeat things', () => {
    repeater(10, mock);
    expect(mock).toHaveBeenCalledTimes(10);
  });
});
