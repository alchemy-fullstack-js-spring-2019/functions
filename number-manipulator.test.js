const { numberManipulator, repeater } = require('./number-manipulator');

describe('hof', () => {
    it('doubles a number', () => {
        expect(numberManipulator(4, n => n * 2)).toEqual(8);
    });

    it('adds 2 to a number', () => {
        expect(numberManipulator(10, n => n + 2)).toEqual(12);
    });

    it('can repeat a fn multiple times', () => {
        const mock = jest.fn();
        repeater(10, mock);
        expect(mock).toHaveBeenCalledTimes(10);
    });
});
