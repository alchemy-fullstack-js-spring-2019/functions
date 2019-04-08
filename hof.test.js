const { numberManipulator, repeater, map } = require('./hof');

describe('mess with jest mocks', () => {
    it('uses jest mocks', () => {
        const mock = jest.fn();
        mock('hi');
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith('hi');
    });
});

describe('high order functions', () => {
    describe('function that manipulates a number by invoking another function', () => {
        it('doubles number with mockCallback', () => {
            const mockCallback = jest.fn(n => n * 2);
            const result = numberManipulator(5, mockCallback);
            expect(result).toBe(10);
            expect(mockCallback).toHaveBeenCalledTimes(1);
            expect(mockCallback).toHaveBeenCalledWith(5);
        });
    });

    describe('function calls another function multiple times', () => {
        it('console logs hi 5 times', () => {
            const mockCallback = jest.fn(() => console.log('hi'));
            repeater(5, mockCallback);
            expect(mockCallback.mock.calls.length).toBe(5);
            expect(mockCallback).toHaveBeenCalledTimes(5);
        });
    });

    describe('function takes an array and does a thing to all of it', () => {
        it('mockCallback attempt', () => {
            const mockCallback = jest.fn(n => n * 2);
            const result = map([1, 2, 3], mockCallback);
            expect(mockCallback.mock.calls.length).toBe(3);
            expect(result).toEqual([2, 4, 6]);
            expect(mockCallback).toHaveBeenCalledTimes(3);
        });
    });
});
