const add = require('./add');

describe('add function', () => {
   it('add all numbers in an array', () => {
       expect(add([1, 2, 3])).toEqual(6);
   });
});
