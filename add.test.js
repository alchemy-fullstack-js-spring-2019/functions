const addArray = require('./add');

describe('add array function', () => {
    it('adds all items in an array', () => {
        const result = addArray([1, 5, 7, 9]);
        expect(result).toEqual(22);
    })
})