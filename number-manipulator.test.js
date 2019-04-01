const { numberManipulator } = require('./number-manipulator');
const { repeater } = require('./number-manipulator');
const { maps } = require('./number-manipulator');

describe('number manipulator callback', () => {
    
  test('number manipulator tripples n w callback', () => {
    const trip = n => n * 3;
    const actual = numberManipulator(3, trip);
    expect(actual).toEqual(9);
  });

});

describe('repeater', () => {

  test('calls function x number of times', () => {
    const mockCallback = jest.fn(n => n + 2);
    repeater(3, mockCallback);
    expect(mockCallback.mock.calls.length).toBe(3);
  });

//   test('returns hi 3 times', () => {
//     function greeting(){
//       return 'hello';
//     }
//     const actual = repeater(2, greeting);
//     expect(actual).toEqual('hello', 'hello');
//   });
});

describe('map function', () => {
  test('callback on each number in array', () => {
    const trip = n => n * 3;
    const actual = maps([3, 4, 5], trip);
    expect(actual).toEqual([9, 12, 15]);
  });
});
