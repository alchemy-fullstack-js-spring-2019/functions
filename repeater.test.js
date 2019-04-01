const repeater = require('./repeater');

describe('repeater function', () => {
    it('is a function that calls another function multiple times', ()=> {
        const mock = jest.fn();
        repeater(5, mock);
        expect(mock).toHaveBeenCalledTimes(5);
    });
});
