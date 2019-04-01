const { evens } = require('./even');
const { firstEven } = require('./even');
const { everyEven } = require('./even');
const { addEvens } = require('./even');

describe('evens', () => {
  
  test('returns only evens in array', () => {
    const actual = evens([1, 2, 3, 4]);
    expect(actual).toEqual([2, 4]);
  });

  test('returns index of first even no', () => {
    const actual = firstEven([1, 2, 3, 4]);
    expect(actual).toEqual(1);
  });

  test('returns true if all nums even', () => {
    const actual = everyEven([2, 4, 6, 8]);
    expect(actual).toEqual(true);
  });

  test('returns false if one is not even', () => {
    const actual = everyEven([1, 2, 4, 6]);
    expect(actual).toEqual(false);
  });
	
  test('filters out even numbers and adds them', () => {
    const actual = addEvens([1, 2, 3, 4, 5, 6]);
    expect(actual).toEqual(12);
  });
  
});
