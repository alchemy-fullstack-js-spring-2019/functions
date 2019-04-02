const add = require('./add');

describe('add array', () => {
    it('takes [1, 2, 3] and returns 6', () => {
        const result = add([1, 2, 3]);
        expect(result).toBe(6);
    });

    it('takes [4, 5, 6] and returns 15', () => {
        const result = add([4, 5, 6]);
        expect(result).toBe(15);
    });
});
