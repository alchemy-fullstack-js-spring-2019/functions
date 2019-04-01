// test('doubles the number 2', () => {
    //     expect(double(2)toBe.(4));
    // });

// toEqual = deep equal, toBe = shallow equal

const { double, doubleArray } = require('./double');

describe('double functions', () => {
    describe('double function', () => {
        it('double the number 2', () => {
            const result = double(2);
            expect(result).toEqual(4);
        });
        
        it('doubles the number 5', () => {
            const result = double(5);
            expect(result).toEqual(10);
        });
    });

    describe('double array', () => {
        it('takes array of [1, 2, 4] returns [2, 4, 6]', () => {
            expect(doubleArray([1, 2, 4])).toEqual([2, 4, 8])
        });

        it('takes array of [3, 6, 9] returns [6, 12, 18]', () => {
            expect(doubleArray([3, 6, 9])).toEqual([6, 12, 18]);
        }); 
    });
});