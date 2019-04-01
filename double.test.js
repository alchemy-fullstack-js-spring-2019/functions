//import double from './double.js'
const { double, doubleArray } = require('./double');

//from docs:
test('doubles the number', () => {
    expect(double(2)).toBe(4);
});

//from ryan: can put multiple tests in a describe block:
describe('double functions', () => {
    describe('double function', () => {
        it('doubles the number 2', () => {
            const result = double(2);
            expect(result).toEqual(4);
        });

        it('doubles the number 5', () => {
            const result = double(5);
            expect(result).toEqual(10);
        });
    });

    describe('double array function', () => {
        it('doubles the numbers in the array', () => {
            const numbers = [2, 4, 6];
            const result = doubleArray(numbers);
            expect(result).toEqual([4, 8, 12]);
        });
    });
});


//toEqual does a deep equal, toBe does a shallow equal

//run test in terminal with [npx jest] or [npm run test](needs test script in package.json)
