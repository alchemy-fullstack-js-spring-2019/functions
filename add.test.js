const add = require('./add');

describe('add function', () => {
    it ('add all itesm in array', ()=>{
        expect(add([1, 2, 3])).toEqual(6);
    });
});
