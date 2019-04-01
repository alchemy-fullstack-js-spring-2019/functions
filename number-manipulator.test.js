const { numberManipulator, repeater } = require('./number-manipulator');

describe('hof', () => {
    it('can manipulate a number', () => {
        // not too sure what i'm supposed to be doing on this one.
    });

    it('can repeat a fn multiple times', () => {
        const mock = jest.fn();
        repeater(10, mock);
        expect(mock).toHaveBeenCalledTimes(10);
    });
});
