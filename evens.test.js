const { evens, firstEven, allEven, addEvens } = require('./evens');

describe('event functions', ()=>{
    it('return an array of even numbres', ()=>{
        expect (evens([1, 2, 3])).toEqual([2]);
    });
});

describe('firstEven function', ()=>{
    it('return index of first even number in array', ()=>{
        expect (firstEven([1, 2, 3])).toEqual(1);
    });
})
;

describe('allEven function', ()=>{
    it('returns yes or no if all items in array are even', ()=>{
        expect (allEven([1, 2, 3])).toEqual(false);
    });
})
;

describe('allEven function', ()=>{
    it('returns yes or no if all items in array are even', ()=>{
        expect (allEven([4, 2, 6])).toEqual(true);
    });
});

describe('addEvens function', ()=>{
    it('adds all even numbers in array', ()=>{
        expect (addEvens([4, 2, 1])).toEqual(6);
    });
});
