const add = require('./add');

describe('add array', () => {
    it('adds all numbers in an array', () => {
        expect(add([1, 2, 3])).toBe(6);
    });
});
