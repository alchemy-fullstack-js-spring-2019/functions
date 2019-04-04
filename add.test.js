const add = require('./add');

describe('cumlative sum of array entries', () => {
  it('adds all entries of array', () => {
    const arrayIn = [0, 1, 2, 3, 5, 8];
    expect(add(arrayIn)).toEqual(19);
  });
});
