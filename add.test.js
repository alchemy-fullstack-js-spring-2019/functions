const addArray = require('./add');

describe('add all items of an arrray', () => {
    it('adds [2, 3, 5] and returns 10', () =>{
        const array = [2, 3, 5];
        expect(addArray(array)).toEqual(10);
    });
});



