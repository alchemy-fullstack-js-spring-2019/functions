const numberManipulator = require('./number-manipulator');
const { checkEven } = require('./evens');

const mockCallback = jest.fn();

describe('numberManipulator function test', () => {
    it('tests if a callback is being called in main function', () => {
        numberManipulator(1, mockCallback);
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

describe('numberManipulator even test', () => {
    it('tests if the checkEven works in the numberManipulator function', () => {
        const result = numberManipulator(1, checkEven);
        expect(result).toBe(false);
    });
});
