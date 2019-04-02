const { numberManipulator, repeater } = require('./number-manipulator');

describe('hof', () => {
    it('doubles a number', () => {
        expect(numberManipulator(4, n => n * 2)).toEqual(8);
    });

    it('can repeat a fn multiple times', () => {
        const mock = jest.fn();
        repeater(10, mock);
        expect(mock).toHaveBeenCalledTimes(10);
    });
});
