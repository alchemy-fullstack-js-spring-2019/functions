const { double, doubleArray } = require('./double');

// test('doubles 2 to be 4', () => {
//     expect(double(2)).toBe(4);
//   });

describe('double tests', () => {
    describe('double number', () => {   
        it('doubles the number 2', () => {
            const result = double(2);
            expect(result).toBe(4);
        });
  
        it('doubles the number 5', () => {
            const result = double(5);
            expect(result).toBe(10);
        });
    });
    describe('double array', () => {
        it('doubles array [1, 2, 3]', () => {
            const result = doubleArray([1, 2, 3]);
            expect(result).toEqual([2, 4, 6]);
        });
  
        it('doubles array [10, 15, 20]', () => {
            const result = doubleArray([10, 15, 20]);
            expect(result).toEqual([20, 30, 40]);
        });
    });
});
