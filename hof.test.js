const { numberManipulator, repeater } = require('./hof');

describe('mess with jest mocks', () => {
  it('uses jest mocks', () => {
    const mock = jest.fn();
    mock('hi');
    mock();
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith('hi');
  });

  describe('hof', () => {
    it('can manipulate a number', () => {
      const mock = jest.fn();
      numberManipulator(5, mock);
      expect(mock).toHaveBeenCalledTimes(1);
      expect(mock).toHaveBeenCalledWith(5);
    });
    
    it('repeater', () => {
      const mock = jest.fn();
      repeater(10, mock);
      expect(mock).toHaveBeenCalledTimes(10);
    });

  });

});
