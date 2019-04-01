const map = require('./map.js');

describe('map tests', () => {
  it('performs the same operation (callback) on each element in an array', () => {
    const mockCallback = jest.fn(x => x + 4);
    const expected = [6, 7, 9, 12, 17];

    const input = [2, 3, 5, 8, 13];

    const result = map(input, mockCallback);

    expect(result).toEqual(expected);
    expect(mockCallback).toHaveBeenCalledTimes(5);
  });
});
