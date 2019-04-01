const { numberManipulator, repeater } = require('./number-manipulator');

describe('manipulate a number by invoking another function', () => {
    it('doubles a given number', () => {
        const mock = jest.fn();
        numberManipulator(5, mock);
    
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith(5);
    });
    it('can repeat a function multiple times', () => {
        const mock = jest.fn();
        repeater(10, mock);
        expect(mock).toHaveBeenCalledTimes(10);
    });
});


