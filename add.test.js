const { add } = require ('./add');
const { addReduce } = require ('./add');

describe('add array items', () => {
  test('adding all numbers in array', () => {
    const actual = add([1, 2, 3, 4]);
    expect(actual).toEqual(10);
  });

  
  test('adding all numbers in array w reduce', () => {
    const actual = addReduce([1, 2, 3, 4]);
    expect(actual).toEqual(10);
  });



});
