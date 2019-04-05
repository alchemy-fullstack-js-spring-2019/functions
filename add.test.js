const add = require('./add');

describe('get sum of an array', ()=> {
    it('get sum of array of integers', ()=> {
        const result = add([1, 2, 3]);
        expect(result).toEqual(6);
    });
});
