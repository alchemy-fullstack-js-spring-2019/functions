const {numberManip, repeater } = require('./hof.js');

describe('jess mock function shennanigans', () =>{
  it('uses jest mocks', () =>{
    const mock = jest.fn();
    numberManip(5, mock);
    expect(mock) .toHaveBeenCalledTimes(1);
    expect(mock) .toHaveBeenCalledWith(5);
    // const result = mock(5);
    // expect(result).toEqual(5);
  });

  it('can repeated a function multiple times', () => {
    const mock = jest.fn();
    repeater(10, mock);
    expect(mock) .toHaveBeenCalledTimes(10);
  });

});
