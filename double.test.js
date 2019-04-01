//this is the same as import
const { 
    double, 
    doubleArray
} = require('./double');

test('function will double 4', () => {
    expect(double(4)).toBe(8);
});

//toBe = shallow equal, toEqual = deep equal
describe('doubling functions', ()=> {
    describe('double function', () => {
        it('doubles the number 2', ()=> {
            const result = double(2);
            expect(result).toEqual(4);
        });
        it('doubles the number 5', ()=> {
            const result = double(5);
            expect(result).toEqual(10);
        });
    });
    
    describe('double array function', () => {
        it('doubles each item in array', ()=> {
            const array = [2, 4, 6, 8];
            const expectedArray = [4, 8, 12, 16];
            const result = doubleArray(array);
            expect(result).toEqual(expectedArray);
        
        });
    });
});


