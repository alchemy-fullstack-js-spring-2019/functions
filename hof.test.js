const { numberMan, repeater } = require('./hof');

//numberMan
//numberMan(5, mock)
//expect mock to be called once
//expect mock to be called with 5

describe('number manipulator functions', () => {
    it('do some stuff to the number', () => {
        const mock = jest.fn(n => n * 2);
        const result = numberMan(5, mock);
        expect(result).toEqual(10);
        expect(mock).toHaveBeenCalledTimes(1);
    });

    it('can repeat a function multiple times', ()=> {
        const mock = jest.fn();
        repeater(10, mock);
        expect(mock).toHaveBeenCalledTimes(10);
    });
});
