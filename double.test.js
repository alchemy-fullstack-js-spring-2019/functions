const {double} = require('./double');
const {doubleArray} = require('./double');


describe('doubles number', ()=>{
    it('doubles the number',()=>{
        expect (double(2)).toBe(4);
    });
   
}); 

describe('creates new array and doubles each value',()=>{
    it('doubles each instant',()=>{
        const result = doubleArray([1,2,3]);
        expect(result).toEqual([2,4,6]);
    });
});