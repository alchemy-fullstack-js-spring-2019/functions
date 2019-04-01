const { numberManipulator, repeater } = require('./number-manipulator');

describe('hof', () => {
    it('can manipulate a number', () => {
        // not too sure on this one :\
    });

    it('can repeat a fn multiple times', () => {
        const mock = jest.fn();
        repeater(10, mock);
        expect(mock).toHaveBeenCalledTimes(10);
    });
});
