const add = require('./add');

describe('array sum tests', () => {
    it('adds all items of the array together', () => {
        const array = [1, 2, 3, 16];
        const result = add(array);
        expect(result).toEqual(22);
    });
});
