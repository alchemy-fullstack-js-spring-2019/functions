const double = require('./double');
const power = require('./power');
const arrayDouble = require('./array-double');
const addArray = require('./add-array');
const onlyEvens = require('./only-evens');
const firstEven = require('./first-even');
const everyEven = require('./every-even');
const addOnlyEvens = require('./add-only-evens');
const numberManipulator = require('./number-manip');
const repeat = require('./repeat');

describe('doubel function', () => {
    
  it('doubles number 2', () => {
    const result = double(2);
    expect(result).toEqual(4);
  });
    
  it('doubles number 5', () => {
    const result = double(5);
    expect(result).toEqual(10);
  });
});

describe('power function', () => {
  it('raises 2 to the power of 2', () => {
    const result = power(2, 2);
    expect(result).toEqual(4);
  });
  
  it('raises 3 to the power of 3', () => {
    const result = power(3, 3);
    expect(result).toEqual(27);
  });

});

describe('double array', () => {
  it('doubles [1,2,3]', () => {
    const array = [1, 2, 3];
    const result = arrayDouble(array);
    const desired = [2, 4, 6];
    expect(result).toEqual(desired);
  });
    
  it('doubles [2,3,4]', () => {
    const array = [2, 3, 4];
    const result = arrayDouble(array);
    const desired = [4, 6, 8];
    expect(result).toEqual(desired);
  });
});

describe('add an array', () => {
  it('adds all numbers in array', () => {
    const array = [1, 2, 3, 4];
    const result = addArray(array);
    expect(result).toEqual(10);
  });

  it('adds all numbers in array', () => {
    const array = [2, 3, 4, 5];
    const result = addArray(array);
    expect(result).toEqual(14);
  });

});

describe('only evens', () => {
  it('filters array for evens', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = onlyEvens(array);
    expect(result).toEqual([2, 4, 6]);
  });
 
  it('filters array for evens', () => {
    const array = [2, 2, 3, 4, 8, 6];
    const result = onlyEvens(array);
    expect(result).toEqual([2, 2, 4, 8, 6]);
  });

});

describe('first even', () => {
  it('returns 2', () => {
    const array = [1, 2, 4, 6, 8];
    const result = firstEven(array);
    expect(result).toEqual(2);
  });
  
  it('returns 4', () => {
    const array = [1, 3, 4, 6, 8];
    const result = firstEven(array);
    expect(result).toEqual(4);
  });
});

describe('every even', () => {
  it('returns true if all numbers are even', () => {
    const array = [2, 4, 6];
    const result = everyEven(array);
    expect(result).toEqual(true);
  });
  it('returns false if not all numbers are even', () => {
    const array = [2, 4, 6, 7];
    const result = everyEven(array);
    expect(result).toEqual(false);
  });

});

describe('add evens', () => {
  it('adds only the evens together', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = addOnlyEvens(array);
    expect(result).toEqual(20);
  });
});

describe('hof number manip', () => {
  it('takes n and a callback double', () => {
    const double = n => n * 2;
    const result = numberManipulator(5, double);
    expect(result).toEqual(10);
  });
  
  it('takes n and a callback double', () => {
    const double = n => n * 2;
    const result = numberManipulator(10, double);
    expect(result).toEqual(20);
  });
});

describe('repeater', () => {
  it('call mock 5 times', () => {
    const mock = jest.fn();
    repeat(10, mock);
    expect(mock).toHaveBeenCalledTimes(10);
  });
});
