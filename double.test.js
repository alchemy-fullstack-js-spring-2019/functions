const timesTwo = require('./double');

describe('double function', () => {
    it('doubles the number 2', () => {
         const result = timesTwo(2);
          expect(result).toEqual(4);
    })
})
