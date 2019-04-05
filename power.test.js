const power = require('./power');

describe('square a number', ()=> {
    it('squares a number', ()=> {
        const result = power(2, 3);
        expect(result).toEqual(8);
    });
});
