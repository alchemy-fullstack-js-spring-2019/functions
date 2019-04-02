const { double } = require('./double');
const power = require('./power');
const { numberManipulator, repeater, map } = require('./hof');

describe('number manipulator test', () => {
    describe('double a number', () => {
        it('takes 2 and returns 4', () => {
            const result = numberManipulator(2, double);
            expect(result).toBe(4);
        });
        it('takes 10 and returns 20', () => {
            const result = numberManipulator(10, double);
            expect(result).toBe(20);
        });
    });

    describe('cube a number', () => {
        it('takes 3 and returns 27', () => {
            const result = numberManipulator(3, power.bind(null, 3));
            expect(result).toBe(27);
        });
        it('takes 2 and returns 8', () => {
            const result = numberManipulator(3, power.bind(null, 2));
            expect(result).toBe(8);
        });
    });

    describe('square a number', () => {
        it('takes 3 and returns 9', () => {
            const result = numberManipulator(2, power.bind(null, 3));
            expect(result).toBe(9);
        });
        it('takes 2 and returns 4', () => {
            const result = numberManipulator(2, power.bind(null, 2));
            expect(result).toBe(4);
        });
    });

    describe('return 1 less than the number', () => {
        it('takes 2 and returns 1', () => {
            const result = numberManipulator(2, n => n - 1);
            expect(result).toBe(1);
        });
        it('takes 0 and returns -1', () => {
            const result = numberManipulator(0, n => n - 1);
            expect(result).toBe(-1);
        });
    });
});

describe('repeater', () => {
    it('call empty mock function 3 times', () => {
        const mockCallback = jest.fn();
        repeater(3, mockCallback);
        expect(mockCallback.mock.calls.length).toBe(3);
    });
    it('repeats hi 3 times', () => {
        let x = 0;
        const mockCallback = jest.fn(() => console.log(++x));
        repeater(3, mockCallback);
        expect(mockCallback).toHaveBeenCalledTimes(3);
    });
});

describe('map: calls another function for each item in an array', () => {
    it('takes [1, 2, 3] and fn double, returns [4, 5, 6]', () => {
        const result = map([1, 2, 3], double);
        expect(result).toEqual([2, 4, 6]);
    });
    it('takes [1, 2, 3] and fn n - 1 , returns [0, 1, 2]', () => {
        const result = map([1, 2, 3], n => n - 1);
        expect(result).toEqual([0, 1, 2]);
    });
});
