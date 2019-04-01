const add = require('./add');

describe('add function', () => {
    it('add all items in an array', () => {
        // const numbers = [1, 2, 3];
        // const result = add(numbers);
        // expect(result).toEqual(6);

        expect(add([1, 2, 3])).toEqual(6);
    });
});
